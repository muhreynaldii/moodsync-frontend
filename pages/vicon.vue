<template>
  <div class="vicon-container">
    <bg-bawah rootClassName="bg-bawah-root-class-name6"></bg-bawah>
    <sidebar />
    <div class="vicon-container1">
      <div class="vicon-vicon-content">
        <div class="vicon-vicon">
          <div class="vicon-lecturer">
            <div id="main-video" class="col-md-6">
              <user-video
                :stream-manager="mainStreamManager"
                :meeting-id="meetingId"
                :user-id="userId"
                type="local"
              />
            </div>
          </div>
          <div class="vicon-audience">
            <div class="vicon-group27">
              <img
                alt="Rectangle194542"
                src="/assets/rectangle194542-92dd-200w.png"
                class="vicon-rectangle19"
              />
              <div class="vicon-profile-card1">
                <div class="vicon-persinal-info1">
                  <div class="vicon-name1">
                    <span class="vicon-text01"><span>Jessica</span></span>
                  </div>
                </div>
              </div>
              <div class="vicon-group17">
                <img
                  alt="microphone4542"
                  src="/assets/microphone4542-y3l.svg"
                  class="vicon-microphone"
                />
              </div>
              <span class="vicon-text03"><span>😁</span></span>
            </div>
            <div class="vicon-group26">
              <img
                alt="Rectangle204542"
                src="/assets/rectangle204542-45gt-200w.png"
                class="vicon-rectangle20"
              />
              <div class="vicon-profile-card2">
                <div class="vicon-persinal-info2">
                  <div class="vicon-name2">
                    <span class="vicon-text05"><span>Roy</span></span>
                  </div>
                </div>
              </div>
              <div class="vicon-group16">
                <img
                  alt="microphone4542"
                  src="/assets/microphone4542-2y4.svg"
                  class="vicon-microphone1"
                />
              </div>
              <span class="vicon-text07"><span>😁</span></span>
            </div>
            <div class="vicon-group25">
              <img
                alt="Rectangle214542"
                src="/assets/rectangle214542-ods6-200w.png"
                class="vicon-rectangle21"
              />
              <div class="vicon-profile-card3">
                <div class="vicon-persinal-info3">
                  <div class="vicon-name3">
                    <span class="vicon-text09"><span>Ramon</span></span>
                  </div>
                </div>
              </div>
              <div class="vicon-group15">
                <img
                  alt="microphone4542"
                  src="/assets/microphone4542-r69l.svg"
                  class="vicon-microphone2"
                />
              </div>
              <span class="vicon-text11"><span>😁</span></span>
            </div>
            <div class="vicon-group24">
              <img
                alt="Rectangle224542"
                src="/assets/rectangle224542-wy2-200w.png"
                class="vicon-rectangle22"
              />
              <div class="vicon-profile-card4">
                <div class="vicon-persinal-info4">
                  <div class="vicon-name4">
                    <span class="vicon-text13"><span>Magen</span></span>
                  </div>
                </div>
              </div>
              <div class="vicon-group14">
                <img
                  alt="microphone4542"
                  src="/assets/microphone4542-nfj7.svg"
                  class="vicon-microphone3"
                />
              </div>
              <span class="vicon-text15"><span>😁</span></span>
            </div>
          </div>
          <img
            alt="arrowsexpand4542"
            src="/assets/arrowsexpand4542-jlcd.svg"
            class="vicon-arrowsexpand"
          />
        </div>
        <img
          alt="Seperator4542"
          src="/assets/seperator4542-o5xk.svg"
          class="vicon-seperator"
        />
        <div class="vicon-action-bar">
          <AudioSettings />
          <div class="vicon-action-button">
            <div class="borderViconButton">
              <button class="ViconIconSize" @click="toggleCamera">
                <font-awesome-icon :icon="cameraIcon" />
              </button>
            </div>
            <div class="borderViconButton" @click="toggleMic">
              <button class="ViconIconSize">
                <font-awesome-icon
                  :icon="isMicOn ? 'microphone' : 'microphone-slash'"
                />
              </button>
            </div>
            <button class="borderViconButton">
              <!--@click="toggleScreenSharing" -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--dl-color-primary-600)"
                class="icon h-[30px] w-[30px]"
              >
                <path
                  d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z"
                  :class="{ hovered: isHovered }"
                />
              </svg>
            </button>
            <button class="borderViconButton" @click="openChatbox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--dl-color-primary-600)"
                class="icon h-[30px] w-[30px]"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                  clip-rule="evenodd"
                  :class="{ hovered: isHovered }"
                />
              </svg>
            </button>
            <button class="borderViconButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--dl-color-primary-600)"
                class="icon h-[30px] w-[30px]"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                  clip-rule="evenodd"
                  :class="{ hovered: isHovered }"
                />
              </svg>
            </button>
          </div>
          <div class="vicon-disconnect" @click="leaveSession">
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
          </div>
        </div>
      </div>
      <div
        class="absolute right-1 top-4 flex h-[500px] w-[350px] flex-col items-center"
      >
        <p class="w-full text-center text-[23px] font-medium text-[#1C64F2]">
          Overall Class Emotion
        </p>
        <div class="flex h-[128px] w-[445px] flex-col items-center">
          <EllipseGraph class="pt-4" :progress="50" emotion="Neutral" />
          <div
            class="flex h-[128px] w-[445px] flex-row items-center justify-center"
          >
            <EllipseGraph class="p-10" :progress="40" emotion="Happy" />
            <EllipseGraph class="p-10" :progress="10" emotion="Sad" />
          </div>
          <div
            class="flex h-[128px] w-[445px] flex-row items-center justify-center"
          >
            <EllipseGraph class="p-10" :progress="10" emotion="Angry" />
            <EllipseGraph class="p-10" :progress="45" emotion="Fearful" />
          </div>
          <div
            class="flex h-[128px] w-[445px] flex-row items-center justify-center"
          >
            <EllipseGraph class="p-10" :progress="5" emotion="Disgusted" />
            <EllipseGraph class="p-10" :progress="10" emotion="Surprised" />
          </div>
        </div>
        <div class="chat-component">
          <ChatBox class="chat-messages" />
        </div>
      </div>
    </div>
    <header data-thq="thq-navbar" class="vicon-navbar-interactive">
      <div class="vicon-container2">
        <nuxt-link to="/dashboard-dosen" class="vicon-navlink5">
          <img
            alt="Rectangle84462"
            src="/assets/logo-200w.png"
            class="vicon-logo"
          />
        </nuxt-link>
        <nuxt-link to="/vicon-started" class="vicon-navlink6">
          <div class="vicon-back button">
            <img
              alt="Rectangle164462"
              src="/assets/rectangle164462-vd7d-200h.png"
              class="vicon-rectangle16"
            />
            <img
              alt="chevronleft4462"
              src="/assets/chevronleft4462-xmap.svg"
              class="vicon-chevronleft"
            />
          </div>
        </nuxt-link>
      </div>
      <div data-thq="thq-navbar-nav" data-role="Nav" class="vicon-desktop-menu">
        <nav data-thq="thq-navbar-nav-links" data-role="Nav" class="vicon-nav">
          <span class="HeadlineType33 vicon-text17">Dasar Pemrograman</span>
        </nav>
      </div>
      <div class="vicon-profile">
        <div data-thq="thq-dropdown" class="vicon-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" class="vicon-dropdown-toggle">
            <img
              alt="Rectangle254162"
              src="/assets/rectangle254162-743-200h.png"
              class="vicon-rectangle25"
            />
            <img
              alt="chevrondown4162"
              src="/assets/chevrondown4162-p2v.svg"
              class="vicon-chevrondown"
            />
          </div>
          <ul data-thq="thq-dropdown-list" class="vicon-dropdown-list">
            <li data-thq="thq-dropdown" class="vicon-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                class="vicon-dropdown-toggle1"
              >
                <img
                  alt="user5862"
                  src="/assets/user5862-kh17n.svg"
                  class="vicon-user"
                />
                <span class="vicon-profile1 BodyType16">Profile</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" class="vicon-dropdown1 list-item">
              <nuxt-link to="/login">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="vicon-dropdown-toggle2"
                >
                  <img
                    alt="logout5862"
                    src="/assets/logout5862-woq.svg"
                    class="vicon-logout"
                  />
                  <span class="vicon-logout1 BodyType16">Logout</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div data-thq="thq-burger-menu" class="vicon-burger-menu">
        <svg viewBox="0 0 1024 1024" class="vicon-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
    </header>
  </div>
</template>

<script>
import { OpenVidu } from "openvidu-browser";
import { faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import EventBus from "../plugins/event-bus";
import { mapGetters } from "vuex";

const APPLICATION_SERVER_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3005/";

export default {
  name: "App",
  // middleware: "auth",
  mounted() {
    this.joinSession();
    // this.audioObject.addEventListener('volumechange', this.updateVolumeSlider)
  },
  // beforeDestroy() {
  //   // Menghapus event listener sebelum komponen dihancurkan
  //     this.audioObject.removeEventListener('volumechange', this.updateVolumeSlider);
  // },
  data() {
    return {
      // OpenVidu objects
      OV: undefined,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      isCameraOn: true,
      isMicOn: true,
      isScreenSharing: false,
      isHovered: false,
      // Join form
      mySessionId: "SessionA",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
      meetingId: null,
      userId: null,
      participantIds: [],
    };
  },
  methods: {
    async joinSession() {
      // Run for lecturer only
      if (this.$auth.loggedIn) {
        this.$axios
          .$get(`/api/meeting/code/${this.mySessionId}`)
          .then((result) => {
            console.log("result", result);
            this.meetingId = result._id;
          })
          .catch((error) => {
            console.log("err", error);
            this.$axios
              .$post("/api/meeting", {
                code: this.mySessionId,
                description: `Description ${this.mySessionId}`,
              })
              .then((result) => {
                console.log("result", result);
                this.meetingId = result._id;
              })
              .catch((error) => {
                console.log("err", error);
              });
          });
      } else {
        this.$axios
          .$get(`/api/meeting/code/${this.mySessionId}`)
          .then((result) => {
            this.meetingId = result._id;
          })
          .catch((error) => {
            console.log("err", error);
          })
          .then(() => {
            this.$axios
              .$get(`/api/users/username/${this.myUserName}`)
              .then((result) => {
                this.userId = result._id;
              })
              .catch((error) => {
                console.log("err", error);
                this.$axios
                  .$post("/api/users/test", {
                    username: this.myUserName,
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
      this.getToken(this.mySessionId).then((token) => {
        // First param is the token. Second param can be retrieved by every user on event
        // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
        this.session
          .connect(token, { clientData: this.myUserName })
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
          code: this.mySessionId,
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
    /**
     * --------------------------------------------
     * GETTING A TOKEN FROM YOUR APPLICATION SERVER
     * --------------------------------------------
     * The methods below request the creation of a Session and a Token to
     * your application server. This keeps your OpenVidu deployment secure.
     *
     * In this sample code, there is no user control at all. Anybody could
     * access your application server endpoints! In a real production
     * environment, your application server must identify the user to allow
     * access to the endpoints.
     *
     * Visit https://docs.openvidu.io/en/stable/application-server to learn
     * more about the integration of OpenVidu in your application server.
     */
    async getToken(mySessionId) {
      const sessionId = await this.createSession(mySessionId);
      return await this.createToken(sessionId);
    },
    async createSession(sessionId) {
      const response = await this.$axios.post(
        APPLICATION_SERVER_URL + "api/session",
        { customSessionId: sessionId },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data; // The sessionId
    },
    async createToken(sessionId) {
      const response = await this.$axios.post(
        APPLICATION_SERVER_URL + "api/session/" + sessionId + "/connections",
        {},
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data; // The token
    },
    toggleCamera() {
      // Mengaktifkan atau menonaktifkan kamera
      if (this.isCameraOn) {
        this.publisher.stream
          .getMediaStream()
          .getVideoTracks()[0].enabled = false;
      } else {
        this.publisher.stream
          .getMediaStream()
          .getVideoTracks()[0].enabled = true;
      }
      this.isCameraOn = !this.isCameraOn;
    },
    toggleMic() {
      this.isMicOn = !this.isMicOn;
      if (this.isMicOn) {
        // Mengaktifkan microphone
        this.publisher.publishAudio(true);
      } else {
        // Mematikan microphone
        this.publisher.publishAudio(false);
      }
    },
    createPublisher() {
      this.publisher = new Publisher();
      this.publisher.publishAudio(this.isMicOn);
      this.session.publish(this.publisher);
    },
    toggleScreenSharing() {
      if (this.isScreenSharing) {
        // Hentikan screen sharing
        this.stopScreenSharing();
      } else {
        // Mulai screen sharing
        this.startScreenSharing();
      }
    },
    startScreenSharing() {
      if (!this.isScreenSharing) {
        // Memulai screen sharing
        this.publisher = this.session.publishScreen();
        this.isScreenSharing = true;
      }
    },
    stopScreenSharing() {
      if (this.isScreenSharing) {
        // Menghentikan screen sharing
        this.publisher.dispose();
        this.publisher = null;
        this.isScreenSharing = false;
      }
    },
    // updateVolumeSlider() {
    //         // Mendapatkan nilai volume saat ini dari objek audio
    //         const currentVolume = this.getAudioVolume();
    //         // Mengupdate nilai volume pada properti data
    //         this.volume = currentVolume;
    // },
    openChatbox() {
      EventBus.$emit("openChatbox"); // Mengirim sinyal ke komponen chatbox
    },
  },
  computed: {
    ...mapGetters("datetime", ["datetime"]),
    cameraIcon() {
      return this.isCameraOn ? faVideo : faVideoSlash;
    },
  },
  watch: {
    datetime(value, oldValue) {
      setTimeout(() => {
        this.$axios
          .$get("/api/recognition/current", {
            params: {
              userId: this.participantIds.map((participant) => participant._id),
              meetingId: this.meetingId,
              createdAt: value,
              // createdAt: oldValue,
            },
          })
          .then((result) => {
            console.log("result", result);
          })
          .catch((err) => {
            console.log("err", err);
          });
      }, 1250); // Delay of 0.5 seconds (500 milliseconds)
    },
  },
};
</script>

<style scoped>
.icon:hover {
  fill: var(
    --dl-color-primary-700
  ); /* Ganti dengan warna yang diinginkan saat di hover */
}
.hovered {
  fill: var(
    --dl-color-primary-700
  ); /* Ganti dengan warna yang diinginkan saat di hover */
}
.ViconIconSize {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
}
.chat-component {
  width: 445px;
  height: 601px;
  display: block;
  flex-direction: column;
  justify-content: space-between;
  border: #595959;
  border-radius: 8px;
}

.chat-messages {
  overflow-y: scroll;
  border: #595959;
  border-radius: 8px;
  /* Ganti dengan properti CSS lain sesuai kebutuhan */
}
.vicon-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.vicon-side-bar-full {
  gap: 382px;
  top: 238px;
  left: 28px;
  width: auto;
  height: auto;
  display: flex;
  position: fixed;
  align-items: center;
  margin-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.vicon-side-bar {
  gap: 21px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.vicon-navlink {
  display: contents;
}
.vicon-dashboard {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: var(--dl-color-default-white);
}
.vicon-chartpie {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-navlink1 {
  display: contents;
}
.vicon-conference {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: var(--dl-color-blue-100);
}
.vicon-cash {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-navlink2 {
  display: contents;
}
.vicon-class {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
}
.vicon-usergroup {
  top: 9px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-navlink3 {
  display: contents;
}
.vicon-notif {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
}
.vicon-bell {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-navlink4 {
  display: contents;
}
.vicon-gamvic {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  border-radius: 8px;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
  justify-content: space-between;
}
.vicon-gamvic1 {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-container1 {
  top: 114px;
  left: 0px;
  right: 0px;
  width: 1505px;
  height: 874px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.vicon-vicon-content {
  gap: 27px;
  top: 0px;
  left: 0px;
  width: 970px;
  height: auto;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.vicon-vicon {
  width: 971px;
  height: 726px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-lecturer {
  top: 0px;
  left: 0px;
  width: 970.75px;
  height: 726px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-lecturer1 {
  top: 0px;
  flex: 1;
  left: 0px;
  width: 100%;
  height: 726px;
  position: absolute;
  border-radius: 33px;
}
.vicon-profile-card {
  gap: 2.8138978481292725px;
  top: 662.25px;
  left: 33.75506591796875px;
  width: 162.95562744140625px;
  height: 36.75px;
  display: flex;
  padding: 22.51118278503418px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 11.25559139251709px 22.51118278503418px 0px
    rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-shrink: 0;
  border-radius: 4.502236366271973px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.30000001192092896);
}
.vicon-persinal-info {
  gap: 31.16315269470215px;
  width: 139.7472686767578px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.vicon-name {
  width: 140px;
  height: 44px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-text {
  color: var(--dl-color-default-white);
  width: 140px;
  height: auto;
  position: absolute;
  font-size: 29.2155px;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-audience {
  gap: 16px;
  top: 19px;
  left: 828.875px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.vicon-group27 {
  width: 107px;
  height: 105px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-rectangle19 {
  top: 0px;
  left: 0px;
  width: 105px;
  height: 105px;
  position: absolute;
  border-radius: 33px;
}
.vicon-profile-card1 {
  gap: 1.1185681819915771px;
  top: 85px;
  left: 27px;
  width: 50px;
  height: 16px;
  display: flex;
  padding: 8.948545455932617px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 4.474272727966309px 8.948545455932617px 0px
    rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.7897090911865234px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.30000001192092896);
}
.vicon-persinal-info1 {
  gap: 12.387837409973145px;
  width: 55.55170822143555px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.vicon-name1 {
  width: 56px;
  height: 17px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-text01 {
  color: var(--dl-color-default-white);
  width: 56px;
  height: auto;
  position: absolute;
  font-size: 11.61359691619873px;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-group17 {
  right: 8px;
  width: 20px;
  bottom: 12px;
  height: 19.04762077331543px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  background-color: rgba(240, 82, 82, 1);
}
.vicon-microphone {
  top: 4.3915228843688965px;
  left: 4.990626811981201px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.vicon-text03 {
  top: 74px;
  left: 22px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-group26 {
  width: 107px;
  height: 105.04762268066406px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-rectangle20 {
  top: 0px;
  left: 0px;
  width: 105px;
  height: 105px;
  position: absolute;
  border-radius: 33px;
}
.vicon-profile-card2 {
  gap: 1.1185681819915771px;
  top: 85px;
  left: 27px;
  width: 50px;
  height: 16px;
  display: flex;
  padding: 8.948545455932617px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 4.474272727966309px 8.948545455932617px 0px
    rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.7897090911865234px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.30000001192092896);
}
.vicon-persinal-info2 {
  gap: 12.387837409973145px;
  width: 55.55170822143555px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.vicon-name2 {
  width: 56px;
  height: 17px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-text05 {
  color: var(--dl-color-default-white);
  width: 56px;
  height: auto;
  position: absolute;
  font-size: 11.61359691619873px;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-group16 {
  right: 8px;
  width: 20px;
  bottom: 12px;
  height: 19.04762077331543px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  background-color: rgba(14, 159, 110, 1);
}
.vicon-microphone1 {
  top: 4.3915228843688965px;
  left: 4.990626811981201px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.vicon-text07 {
  top: 76px;
  left: 22px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-group25 {
  width: 107px;
  height: 105.04762268066406px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-rectangle21 {
  top: 0px;
  left: 0px;
  width: 105px;
  height: 105px;
  position: absolute;
  border-radius: 33px;
}
.vicon-profile-card3 {
  gap: 1.1185681819915771px;
  top: 85px;
  left: 27px;
  width: 50px;
  height: 16px;
  display: flex;
  padding: 8.948545455932617px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 4.474272727966309px 8.948545455932617px 0px
    rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.7897090911865234px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.30000001192092896);
}
.vicon-persinal-info3 {
  gap: 12.387837409973145px;
  width: 55.55170822143555px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.vicon-name3 {
  width: 56px;
  height: 17px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-text09 {
  color: var(--dl-color-default-white);
  width: 56px;
  height: auto;
  position: absolute;
  font-size: 11.61359691619873px;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-group15 {
  right: 8px;
  width: 20px;
  bottom: 12px;
  height: 19.04762077331543px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  background-color: rgba(28, 100, 242, 1);
}
.vicon-microphone2 {
  top: 4.3915228843688965px;
  left: 4.990626811981201px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.vicon-text11 {
  top: 75.952392578125px;
  left: 22px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-group24 {
  width: 107px;
  height: 105px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-rectangle22 {
  top: 0px;
  left: 0px;
  width: 105px;
  height: 105px;
  position: absolute;
  border-radius: 33px;
}
.vicon-profile-card4 {
  gap: 1.1185681819915771px;
  top: 83px;
  left: 27px;
  width: 50px;
  height: 16px;
  display: flex;
  padding: 8.948545455932617px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 4.474272727966309px 8.948545455932617px 0px
    rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.7897090911865234px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.30000001192092896);
}
.vicon-persinal-info4 {
  gap: 12.387837409973145px;
  width: 55.55170822143555px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.vicon-name4 {
  width: 56px;
  height: 17px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 1;
}
.vicon-text13 {
  color: var(--dl-color-default-white);
  width: 56px;
  height: auto;
  position: absolute;
  font-size: 11.61359691619873px;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-group14 {
  right: 8px;
  width: 20px;
  bottom: 12px;
  height: 19.04762077331543px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  background-color: rgba(240, 82, 82, 1);
}
.vicon-microphone3 {
  top: 4.3915228843688965px;
  left: 4.990626811981201px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.vicon-text15 {
  top: 72.90478515625px;
  left: 22px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
.vicon-arrowsexpand {
  top: 21px;
  left: 28.875px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.vicon-seperator {
  width: 948px;
  height: 1px;
}
.vicon-action-bar {
  gap: 250px;
  width: 948px;
  height: 60px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.vicon-volume {
  top: 0px;
  left: 0px;
  width: 150px;
  height: 56px;
  position: absolute;
  box-sizing: content-box;
}
.vicon-action-button {
  gap: 9px;
  top: 0px;
  left: 400px;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: flex-start;
}
.borderViconButton {
  width: 59.20000076293945px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-color: rgba(229, 231, 235, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 18.610000610351562px;
}
.vicon-videocamera {
  top: 13px;
  left: 15px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-mic {
  width: 59.20000076293945px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(229, 231, 235, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 18.610000610351562px;
}
.vicon-microphone4 {
  top: 13px;
  left: 14.795166015625px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-share-screen {
  width: 59.20000076293945px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(229, 231, 235, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 18.610000610351562px;
}
.vicon-collection {
  top: 13px;
  left: 15.590347290039062px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-menu {
  width: 59.20000076293945px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(229, 231, 235, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 18.610000610351562px;
}
.vicon-dotshorizontal {
  top: 13px;
  left: 15.385498046875px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-disconnect {
  top: 0px;
  right: 0px;
  width: 59.20481872558594px;
  height: 56.38554382324219px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-radius: 18.610000610351562px;
  justify-content: center;
  cursor: pointer;
  background-color: var(--dl-color-red-500);
}
.vicon-disconnect:hover {
  background-color: var(--dl-color-red-600);
}
.vicon-phonemissedcall {
  top: 13px;
  left: 15px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-emotion-overview {
  flex: 0 0 auto;
  width: 445px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 128px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: bet;
}
.vicon-gamevic {
  width: 445px;
  height: 601px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.vicon-navbar-interactive {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.vicon-container2 {
  width: 157px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vicon-navlink5 {
  display: contents;
}
.vicon-logo {
  width: 50px;
  height: 50px;
  text-decoration: none;
}
.vicon-navlink6 {
  display: contents;
}
.vicon-back {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-width: 0px;
  text-decoration: none;
}
.vicon-rectangle16 {
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 12px;
}
.vicon-chevronleft {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.vicon-desktop-menu {
  display: flex;
}
.vicon-nav {
  flex: 0 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
}
.vicon-text18 {
  color: var(--dl-color-gray-500);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 125%;
}
.vicon-button {
  width: auto;
  height: auto;
  display: flex;
  padding: 8px;
  align-self: center;
  box-sizing: content-box;
  align-items: center;
  flex-shrink: 0;
  border-color: rgba(28, 100, 242, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  justify-content: center;
  background-color: var(--dl-color-primary-600);
}
.vicon-profile {
  gap: 2px;
  display: flex;
  align-items: center;
}
.vicon-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.vicon-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius2);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.vicon-rectangle25 {
  width: 50px;
  height: 50px;
  border-radius: 33px;
}
.vicon-chevrondown {
  width: 30px;
  height: 30px;
}
.vicon-dropdown-list {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.vicon-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.vicon-dropdown-toggle1 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.vicon-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-blue-600);
}
.vicon-user {
  width: 20px;
  height: 20px;
}
.vicon-profile1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.vicon-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.vicon-dropdown-toggle2 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.vicon-dropdown-toggle2:hover {
  fill: #fff;
  color: #fff;
  background-color: var(--dl-color-red-400);
}
.vicon-logout {
  width: 20px;
  height: 20px;
}
.vicon-logout1 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.vicon-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.vicon-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media (max-width: 1600px) {
  .vicon-container1 {
    width: 1354px;
  }
  .vicon-emotion-overview {
    width: 363px;
  }
  .vicon-gamevic {
    width: 363px;
  }
  .vicon-container2 {
    width: 137px;
  }
  .vicon-text17 {
    color: var(--dl-color-primary-600);
  }
  .vicon-profile {
    top: 29px;
    right: 92px;
    position: static;
  }
}
@media (max-width: 767px) {
  .vicon-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .vicon-desktop-menu {
    display: none;
  }
  .vicon-burger-menu {
    display: flex;
  }
}
@media (max-width: 479px) {
  .vicon-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
}
</style>
