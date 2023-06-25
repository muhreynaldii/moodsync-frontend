<template>
  <div class="h-[100%] w-[100%]">
    <video
      ref="videoElement"
      class="rounded-[6px] object-fill h-[100%] w-[100%]"
      autoplay
    ></video>
    <p
      v-if="type === 'local'"
      class="absolute left-4 top-14 rounded-full bg-white px-3 py-1 text-xl capitalize"
    >
      {{ currentPredict }}
    </p>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";
import { io } from "socket.io-client";
import { mapActions } from "vuex";

const API_BASE_URL = "http://localhost:3005";
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
      this.socketIo = io(API_BASE_URL);
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
/* .vicon-lecturer {
  top: 0px;
  left: 0px;
  width: 970.75px;
  height: 726px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 33px;
} */
</style>
