<template>
  <div class="h-[100%] w-[100%]">
    <video
      ref="videoElement"
      class="h-[100%] w-[100%] rounded-[6px] object-cover"
      controls
      autoplay
    ></video>
    <transition name="popup" mode="out-in" @enter="enter" @leave="leave">
      <p
        v-if="type === 'local' && !this.$auth.user"
        :key="currentPredict"
        class="absolute right-4 top-4 rounded-full px-3 py-1 text-xl capitalize"
      >
        <img
          :src="getEmoteIcon(currentPredict)"
          :alt="getEmoteIcon(currentPredict)"
          class="scale-1 transform"
        />
      </p>
    </transition>
    <p
      v-if="type === 'local' && !this.$auth.user"
      class="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xl capitalize"
    >
      {{ currentPredict }}
    </p>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";
import { io } from "socket.io-client";
import { mapActions } from "vuex";

const MODEL_URL =
  "https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights";

export default {
  name: "OvVideo",
  props: {
    streamManager: Object,
    type: String,
    meetingId: String,
    userId: String,
  },
  data() {
    return {
      currentPredict: null,
      intervalId: null,
      socketIo: null,
      isBusy: false,
    };
  },
  async mounted() {
    this.streamManager.addVideoElement(this.$refs.videoElement);
    if (this.type === "local") {
      await this.loadModels();
      if (!this.socketIo) this.initSocketIo();
      // this.intervalId = setInterval(() => {
      //   this.detectFaces();
      // }, 2000);
    }
  },
  beforeDestroy() {
    this.clearInterval();
    if (this.socketIo) this.socketIo.disconnect();
  },
  methods: {
    ...mapActions("datetime", ["changeDatetime"]),
    async loadModels() {
      await Promise.all([
        faceapi.loadTinyFaceDetectorModel(MODEL_URL),
        faceapi.loadFaceExpressionModel(MODEL_URL),
      ]);
    },
    clearInterval() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    async detectFaces({ datetime }) {
      if (this.isBusy) return;
      this.isBusy = true;
      try {
        const faceApiResult = await faceapi
          .detectAllFaces(
            this.$refs.videoElement,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceExpressions();
        if (!faceApiResult.length) {
          console.log("FER:: Face not detected");
          this.currentPredict = "Face not detected";
          this.isBusy = false;
        } else {
          const expressions = faceApiResult[0].expressions;
          console.log("FER:: Result", {
            ...this.parseProbability(expressions),
            predict: this.getExpression(expressions),
          });
          this.currentPredict = this.getExpression(expressions);
          const body = {
            ...this.parseProbability(expressions),
            predict: this.getExpression(expressions),
            meetingId: this.meetingId,
            userId: this.userId,
            createdAt: datetime,
            updatedAt: datetime,
          };
          console.log("body", body);
          this.$axios
            .$post("/api/recognition", body)
            .then((result) => {
              console.log("result", result);
            })
            .catch((err) => {
              console.log("err", err);
            })
            .finally(() => {
              this.isBusy = false;
            });
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    getExpression(expressions) {
      const maxValue = Math.max(...Object.values(expressions));
      return Object.keys(expressions).find(
        (expression) => expressions[expression] === maxValue
      );
    },
    parseProbability(probability) {
      return Object.fromEntries(
        Object.entries(probability).map(([key, value]) => [
          key,
          Number(value.toFixed(2)),
        ])
      );
    },
    initSocketIo() {
      console.log(
        "first",
        "join",
        `student-${this.streamManager.session.sessionId}`
      );
      this.socketIo = io(process.env.API_BASE_URL);
      this.socketIo.emit(
        "join",
        `student-${this.streamManager.session.sessionId}`
      );
      this.socketIo.on("SEND_RECOGNITION_DATA", ({ meetingId, datetime }) => {
        console.log("event received at", meetingId, datetime);
        this.changeDatetime({ datetime });
        if (!this.$auth.loggedIn) {
          this.detectFaces({ datetime });
        } else {
          console.log("do fetch data");
          // this.fetchData()
        }
      });
    },
    getEmoteIcon(emotion) {
      switch (emotion) {
        case "neutral":
          return require("~/assets/img/Neutral.png");
        case "happy":
          return require("~/assets/img/Happy.png");
        case "sad":
          return require("~/assets/img/Sad.png");
        case "angry":
          return require("~/assets/img/Angry.png");
        case "fearful":
          return require("~/assets/img/Fearful.png");
        case "disgusted":
          return require("~/assets/img/Disgusted.png");
        case "surprised":
          return require("~/assets/img/Surprised.png");
        default:
          return "";
      }
    },
    // initSocketIo() {
    //   this.socketIo = io(API_BASE_URL);
    //   this.socketIo.emit("join", this.streamManager.session.sessionId);
    //   this.socketIo.on("RECOGNITION_DATA_ADDED", (code) => {
    //     console.log("event received at", code);
    //     this.detectFaces();
    //   });
    // },
  },
};
</script>

<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease-out;
}
.popup-enter, .popup-leave-to /* .popup-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.popup-enter-to, .popup-leave /* .popup-leave-active in <2.1.8 */ {
  opacity: 1;
  transform: scale(1);
}
</style>
