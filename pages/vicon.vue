<template>
  <main
    class="ml-[100px] flex h-screen w-screen items-center justify-start overflow-hidden bg-white pr-[90px] xl:ml-[161px]"
  >
    <pop-up-join v-show="showModal" class="z-50" @join-modal="joinSession" />
    <div class="absolute left-[22px] top-[21px] w-full">
      <h1 class="text-center text-[33px]">{{ roomName }}</h1>
    </div>
    <div class="flex flex-col">
      <div
        class="h-[625.53px] xl:h-[717.53px]"
        :class="{
          'w-[900px] xl:w-[1184px] 2xl:w-[1623px]': !this.$auth.user,
          'w-[580px] xl:w-[918px] 2xl:w-[1332px]': this.$auth.user,
        }"
      >
        <div class="flex items-center justify-center">
          <div
            class="grid h-[548px] items-center justify-center gap-1 object-fill xl:h-[710px]"
            :class="[getGridClass(subscribers.length)]"
          >
            <!-- <user-video
            :stream-manager="mainStreamManager"
            :meeting-id="meetingId"
            :user-id="userId"
            type="local"
          /> -->
            <user-video
              controls
              :stream-manager="publisher"
              :meeting-id="meetingId"
              :user-id="userId"
              type="local"
              @click.native="updateMainVideoStreamManager(publisher)"
              class="h-full w-full bg-slate-300"
            />
            <user-video
              v-for="sub in subscribers"
              :key="sub.stream.connection.connectionId"
              :stream-manager="sub"
              @click.native="updateMainVideoStreamManager(sub)"
              class="aspect-video bg-slate-300"
            />
          </div>
        </div>
        <div class="flex w-full items-center justify-center">
          <hr class="mt-[27px] w-[948px] border border-[#D1D5DB]" />
        </div>
        <div
          class="relative my-[29px] flex w-full items-center justify-between px-[19px]"
        >
          <AudioSettings @input="setAudioVolume"/>
          <ActionBar
            @on-camera="toggleCamera"
            @toggle-mic="toggleMic"
            @open-chat="openChatbox"
            @share-Screen="toggleScreenSharing"
            class="absolute -bottom-[28px] left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div
            class="tooltip flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-red-500 hover:bg-red-700"
            @click="leaveSession"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="h-[24px] w-[24px]"
            >
              <path
                fill-rule="evenodd"
                d="M15.22 3.22a.75.75 0 011.06 0L18 4.94l1.72-1.72a.75.75 0 111.06 1.06L19.06 6l1.72 1.72a.75.75 0 01-1.06 1.06L18 7.06l-1.72 1.72a.75.75 0 11-1.06-1.06L16.94 6l-1.72-1.72a.75.75 0 010-1.06zM1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="tooltiptext">Disconnect</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-[600px] w-[300px] pl-[20px] xl:h-[653.48px] xl:pl-[30px]"
      v-if="this.$auth.user"
    >
      <p class="w-[300px] text-center text-[23px] font-medium text-[#1C64F2]">
        Overall Class Emotion
      </p>
      <div class="flex h-[128px] w-[300px] flex-col items-center">
        <EllipseGraph
          class="pt-4"
          :progress="totalEmotionsPercentage.neutral"
          emotion="Neutral"
        />
        <div
          class="flex h-[128px] w-[300px] flex-row items-center justify-center"
        >
          <EllipseGraph
            class="p-10"
            :progress="totalEmotionsPercentage.happy"
            emotion="Happy"
          />
          <EllipseGraph
            class="p-10"
            :progress="totalEmotionsPercentage.sad"
            emotion="Sad"
          />
        </div>
        <div
          class="flex h-[128px] w-[300px] flex-row items-center justify-center"
        >
          <EllipseGraph
            class="p-10"
            :progress="totalEmotionsPercentage.angry"
            emotion="Angry"
          />
          <EllipseGraph
            class="p-10"
            :progress="totalEmotionsPercentage.fearful"
            emotion="Fearful"
          />
        </div>
        <div
          class="flex h-[128px] w-[300px] flex-row items-center justify-center"
        >
          <EllipseGraph
            class="p-10"
            :progress="totalEmotionsPercentage.disgusted"
            emotion="Disgusted"
          />
          <EllipseGraph
            class="p-10"
            :progress="totalEmotionsPercentage.surprised"
            emotion="Surprised"
          />
        </div>
      </div>
    </div>
    <ChatBox />
  </main>
</template>

<script>
import { OpenVidu } from "openvidu-browser";
import EventBus from "../plugins/event-bus";
import { mapGetters } from "vuex";

export default {
  name: "App",
  // middleware: "auth",
  layout: "side",

  data() {
    return {
      // OpenVidu objects
      OV: undefined,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      isScreenSharing: false,
      isHovered: false,
      // itsSessionId: "SessionA",
      // itsUserName: "Participant" + Math.floor(Math.random() * 100),
      meetingId: null,
      userId: null,
      participantIds: [],
      currentEmotions: [],
      totalEmotionsPercentage: {},
      showModal: true,
      roomName: "",
    };
  },
  methods: {
    async joinSession(itsUserName, itsSessionId, itsRoomId) {
      this.showModal = false;
      if (this.$auth.loggedIn) {
        this.$axios
          .$get(`/api/meeting/code/${itsSessionId}`)
          .then((result) => {
            console.log("result", result);
            this.meetingId = result._id;
          })
          .catch((error) => {
            console.log("err", error);
            this.$axios
              .$post("/api/meeting", {
                code: itsSessionId,
                description: itsRoomId,
              })
              .then((result) => {
                console.log("result", result);
                this.meetingId = result._id;
                this.roomName = result.description;
              })
              .catch((error) => {
                console.log("err", error);
              });
          });
      } else {
        this.$axios
          .$get(`/api/meeting/code/${itsSessionId}`)
          .then((result) => {
            this.meetingId = result._id;
            this.roomName = result.description;
          })
          .catch((error) => {
            console.log("err", error);
          })
          .then(() => {
            this.$axios
              .$get(`/api/users/username/${itsUserName}`)
              .then((result) => {
                this.userId = result._id;
              })
              .catch((error) => {
                console.log("err", error);
                this.$axios
                  .$post("/api/users", {
                    username: itsUserName,
                    role: "student",
                  })
                  .then((result) => {
                    console.log("result", result);
                    this.userId = result._id;
                  })
                  .catch((error) => {
                    console.log("err", error);
                  });
              });
          });
      }
      // --- 1) Get an OpenVidu object ---
      this.OV = new OpenVidu();
      // --- 2) Init a session ---
      this.session = this.OV.initSession();
      // --- 3) Specify the actions when events take place in the session ---
      // On every new Stream received...
      this.session.on("streamCreated", ({ stream }) => {
        const subscriber = this.session.subscribe(stream);
        this.subscribers.push(subscriber);
      });
      // On every Stream destroyed...
      this.session.on("streamDestroyed", ({ stream }) => {
        const index = this.subscribers.indexOf(stream.streamManager, 0);
        if (index >= 0) {
          this.subscribers.splice(index, 1);
        }
      });
      // On every asynchronous exception...
      this.session.on("exception", ({ exception }) => {
        console.warn(exception);
      });
      // --- 4) Connect to the session with a valid user token ---
      // Get a token from the OpenVidu deployment
      this.getToken(itsSessionId).then((token) => {
        // First param is the token. Second param can be retrieved by every user on event
        // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
        this.session
          .connect(token, { clientData: itsUserName })
          .then(() => {
            // --- 5) Get your own camera stream with the desired properties ---
            // Init a publisher passing undefined as targetElement (we don't want OpenVidu to insert a video
            // element: we will manage it on our own) and with the desired properties

            let publisher = this.OV.initPublisher(undefined, {
              audioSource: undefined,
              videoSource: undefined,
              publishAudio: true,
              publishVideo: true,
              resolution: "640x480",
              frameRate: 30,
              insertMode: "APPEND",
              mirror: false, // Whether to mirror your local video or not
            });
            // Set the main video in the page to display our webcam and store our Publisher
            this.mainStreamManager = publisher;
            this.publisher = publisher;
            // --- 6) Publish your stream ---
            this.session.publish(this.publisher);
            if (this.$auth.loggedIn) {
              this.$axios
                .$put(`/api/recognition/${this.meetingId}`, {
                  isStart: true,
                  code: this.mainStreamManager.session.sessionId,
                })
                .then((result) => {
                  console.log("result", result);
                })
                .catch((err) => {
                  console.log("err", err);
                });
            }
          })
          .catch((error) => {
            console.log(
              "There was an error connecting to the session:",
              error.code,
              error.message
            );
          });
      });
      window.addEventListener("beforeunload", this.leaveSession);
    },
    leaveSession() {
      // --- 7) Leave the session by calling 'disconnect' method over the Session object ---
      if (this.session) this.session.disconnect();
      // Empty all properties...
      this.session = undefined;
      this.mainStreamManager = undefined;
      this.publisher = undefined;
      this.subscribers = [];
      this.OV = undefined;
      this.$router.go(-1);
      // Remove beforeunload listener
      window.removeEventListener("beforeunload", this.leaveSession);
      this.$axios
        .$put(`/api/recognition/${this.meetingId}`, {
          isStart: false,
          code: itsSessionId,
        })
        .then((result) => {
          console.log("result", result);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    updateMainVideoStreamManager(stream) {
      if (this.mainStreamManager === stream) return;
      this.mainStreamManager = stream;
    },
    async getToken(itsSessionId) {
      const sessionId = await this.createSession(itsSessionId);
      return await this.createToken(sessionId);
    },
    async createSession(sessionId) {
      const response = await this.$axios.post(
        process.env.API_BASE_URL + "/api/session",
        { customSessionId: sessionId },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    },
    async createToken(sessionId) {
      const response = await this.$axios.post(
        process.env.API_BASE_URL + "/api/session/" + sessionId + "/connections",
        {},
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    },
    toggleCamera(value) {
      // Mengaktifkan atau menonaktifkan kamera
      if (value) {
        this.publisher.stream
          .getMediaStream()
          .getVideoTracks()[0].enabled = true;
      } else {
        this.publisher.stream
          .getMediaStream()
          .getVideoTracks()[0].enabled = false;
      }
    },
    toggleMic(value) {
      if (value) {
        this.publisher.publishAudio(true);
      } else {
        this.publisher.publishAudio(false);
      }
    },
    toggleChat() {
      this.isOpened = !this.isOpened;
    },
    toggleScreenSharing(isScreenSharing) {
      if (isScreenSharing) {
        this.stopScreenSharing();
      } else {
        this.startScreenSharing();
      }
    },
    startScreenSharing() {
      this.previousMainStreamManager = this.mainStreamManager;
      navigator.mediaDevices
        .getDisplayMedia({ video: true })
        .then((stream) => {
          const videoTrack = stream.getVideoTracks()[0];
          this.publisher
            .replaceTrack(videoTrack)
            .then(() => {
              this.isScreenSharing = true;
              this.updateMainVideoStreamManager(this.publisher);
            })
            .catch((error) => {
              console.error("Failed to replace track:", error);
            });
        })
        .catch((error) => {
          console.error("Failed to get display media:", error);
        });
    },
    stopScreenSharing() {
      this.publisher
        .replaceTrack(null)
        .then(() => {
          this.isScreenSharing = false;
          this.mainStreamManager = this.previousMainStreamManager;
          this.updateMainVideoStreamManager(this.mainStreamManager);
        })
        .catch((error) => {
          console.error("Failed to replace track:", error);
        });
    },

    setAudioVolume() {
        // Ambil nilai volume dari slider dan set volume audio pada Publisher
        const audioVolume = parseInt(this.volume);
        this.publisher.setAudioVolume(audioVolume);
    },
    openChatbox() {
      EventBus.$emit("openChatbox"); // Mengirim sinyal ke komponen chatbox
    },

    // Grid untuk video conference
    getGridClass(length) {
      if (length === 1) {
        return "grid-cols-2";
      } else if (length === 2) {
        return "grid-cols-4 grid-rows-2 tiga";
      } else if (length === 3) {
        return "grid-cols-2 grid-rows-2";
      } else if (length === 4) {
        return "grid-cols-6 grid-rows-2 lima";
      } else if (length === 5) {
        return "grid-cols-3 grid-rows-2";
      } else if (length === 6) {
        return "grid-cols-6 grid-rows-3 tujuh";
      } else if (length === 7) {
        return "grid-cols-6 grid-rows-3 delapan";
      } else if (length === 8) {
        return "grid-cols-3 grid-rows-3";
      }
    },
  },
  computed: {
    ...mapGetters("datetime", ["datetime"]),
  },
  watch: {
    datetime(value, oldValue) {
      setTimeout(() => {
        this.$axios
          .$get("/api/recognition/currentTotal", {
            params: {
              userId: this.participantIds.map((participant) => participant._id),
              meetingId: this.meetingId,
              createdAt: value,
              // createdAt: oldValue,
            },
          })
          .then((result) => {
            this.currentEmotions = result;
            this.totalEmotionsPercentage = result.totalEmotionsPercentage;
          })
          .catch((err) => {
            console.log("err", err);
            this.currentEmotions = [];
          });
      }, 10000); // Delay
    },
  },
};
</script>

<style scoped>
.tiga > *:first-child {
  grid-column: span 2 / span 2;
}
.tiga > *:nth-child(2) {
  grid-column: span 2 / span 2;
  grid-column-start: 3;
}
.tiga > *:last-child {
  grid-column: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 2;
}
.lima > *:first-child {
  grid-column: span 2 / span 2;
}
.lima > *:nth-child(2) {
  grid-column: span 2 / span 2;
  grid-column-start: 3;
}
.lima > *:nth-child(3) {
  grid-column: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 2;
}
.lima > *:nth-child(4) {
  grid-column: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 2;
}
.lima > *:last-child {
  grid-column: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 1;
}
.tujuh > *:first-child {
  grid-column: span 2 / span 2;
}
.tujuh > *:nth-child(2) {
  grid-column: span 2 / span 2;
  grid-column-start: 3;
}
.tujuh > *:nth-child(3) {
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 2;
}
.tujuh > *:nth-child(4) {
  grid-column: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 2;
}
.tujuh > *:nth-child(5) {
  grid-column: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 1;
}
.tujuh > *:nth-child(6) {
  grid-column: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 2;
}
.tujuh > *:last-child {
  grid-column: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 3;
}
.delapan > *:first-child {
  grid-column: span 2 / span 2;
}
.delapan > *:nth-child(2) {
  grid-column: span 2 / span 2;
  grid-column-start: 3;
}
.delapan > *:nth-child(3) {
  grid-column: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 2;
}
.delapan > *:nth-child(4) {
  grid-column: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 2;
}
.delapan > *:nth-child(5) {
  grid-column: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 1;
}
.delapan > *:nth-child(6) {
  grid-column: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 2;
}
.delapan > *:nth-child(7) {
  grid-column: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 3;
}
.delapan > *:last-child {
  grid-column: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 3;
}

.tooltip {
  position: relative;
}

/* Tooltip text */
.tooltip .tooltiptext {
  font-size: 12px;
  visibility: hidden;
  width: 120px;
  background-color: var(--dl-color-red-600);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 1s;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--dl-color-red-600) transparent transparent transparent;
}
</style>
