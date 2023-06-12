<template>
  <div>
    <video ref="videoElement" class="vicon-lecturer" autoplay></video>
    <p
      v-if="type === 'local'"
      class="absolute top-14 left-4 bg-white rounded-full px-3 py-1 text-xl capitalize"
    >
      {{ currentPredict }}
    </p>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";
import { io } from "socket.io-client";

const API_BASE_URL = "http://localhost:3005";
const MODEL_URL =
  "https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights";

export default {
  name: "OvVideo",
  props: {
    streamManager: Object,
    type: String,
  },
  data() {
    return {
      currentPredict: null,
      intervalId: null,
      socketIo: null,
    };
  },
  async mounted() {
    this.streamManager.addVideoElement(this.$refs.videoElement);
    if (this.type === "local") {
      if (!this.socketIo) this.initSocketIo();
      await this.loadModels();
      this.intervalId = setInterval(() => {
        this.detectFaces();
      }, 2000);
    }
  },
  beforeDestroy() {
    this.clearInterval();
    if (this.socketIo) this.socketIo.disconnect();
  },
  methods: {
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
    async detectFaces() {
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
        } else {
          const expressions = faceApiResult[0].expressions;
          console.log("FER:: Result", {
            ...this.parseProbability(expressions),
            predict: this.getExpression(expressions),
          });
          this.currentPredict = this.getExpression(expressions);
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
      this.socketIo = io(API_BASE_URL);
      this.socketIo.emit("join", this.streamManager.session.sessionId);
      this.socketIo.on("RECOGNITION_DATA_ADDED", (code) => {
        console.log("event received at", code);
        this.detectFaces();
      });
    },
  },
};
</script>

<style scoped>
.vicon-lecturer {
  top: 0px;
  left: 0px;
  width: 970.75px;
  height: 726px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 33px;
}
</style>