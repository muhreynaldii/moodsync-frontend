<template>
  <main
    class="ml-[161px] flex h-screen w-screen items-center justify-start overflow-hidden bg-white pr-[90px]"
  >
    <div class="absolute left-[22px] top-[21px] w-full">
      <h1 class="text-center text-[33px]">Dasar Pemrograman</h1>
    </div>
    <div class="flex flex-col">
      <div class="h-[717.53px] w-[1332px]">
        <div class="flex flex-row flex-wrap justify-center gap-1">
          <user-video :stream-manager="mainStreamManager" type="local" />
          <!-- <user-video
            :stream-manager="publisher"
            @click.native="updateMainVideoStreamManager(publisher)"
          />
          <user-video
            v-for="sub in subscribers"
            :key="sub.stream.connection.connectionId"
            :stream-manager="sub"
            @click.native="updateMainVideoStreamManager(sub)"
          /> -->
        </div>
        <div class="flex w-full items-center justify-center">
          <hr class="mt-[27px] w-[948px] border border-[#D1D5DB]" />
        </div>
        <div
          class="my-[29px] flex w-full items-center justify-between px-[19px]"
        >
          <AudioSettings />
          <ActionBar @on-camera="toggleCamera" @open-chat="openChatbox" />
          <div
            class="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-red-500 hover:bg-red-700"
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
          </div>
        </div>
      </div>
    </div>
    <div class="h-[538.48px] w-[250px] pl-[87px]">
      <p class="w-[250px] text-center text-[23px] font-medium text-[#1C64F2]">
        Overall Class Emotion
      </p>
      <div class="flex h-[128px] w-[250px] flex-col items-center">
        <EllipseGraph class="pt-4" :progress="50" emotion="Neutral" />
        <div
          class="flex h-[128px] w-[250px] flex-row items-center justify-center"
        >
          <EllipseGraph class="p-10" :progress="40" emotion="Happy" />
          <EllipseGraph class="p-10" :progress="10" emotion="Sad" />
        </div>
        <div
          class="flex h-[128px] w-[250px] flex-row items-center justify-center"
        >
          <EllipseGraph class="p-10" :progress="10" emotion="Angry" />
          <EllipseGraph class="p-10" :progress="45" emotion="Fearful" />
        </div>
        <div
          class="flex h-[128px] w-[250px] flex-row items-center justify-center"
        >
          <EllipseGraph class="p-10" :progress="5" emotion="Disgusted" />
          <EllipseGraph class="p-10" :progress="10" emotion="Surprised" />
        </div>
      </div>
      <ChatBox />
    </div>
  </main>
</template>

<script>
import { OpenVidu } from "openvidu-browser";
import EventBus from "../plugins/event-bus";

const APPLICATION_SERVER_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3005/";

export default {
  name: "App",
  middleware: "auth",
  layout: "side",
  mounted() {
    this.joinSession();
    // this.audioObject.addEventListener('volumechange', this.updateVolumeSlider)
  },
  // beforeDestroy() {
  //   // Menghapus event listener sebelum komponen dihancurkan
  //   this.audioObject.removeEventListener(
  //     "volumechange",
  //     this.updateVolumeSlider
  //   );
  // },
  data() {
    return {
      // OpenVidu objects
      OV: undefined,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      // isCameraOn: true,
      // isMicOn: true,
      isScreenSharing: false,
      isHovered: false,
      // Join form
      mySessionId: "SessionA",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
    };
  },
  methods: {
    joinSession() {
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
      console.log("hai");
    },
    toggleMic() {
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
    //   // Mendapatkan nilai volume saat ini dari objek audio
    //   const currentVolume = this.getAudioVolume();
    //   // Mengupdate nilai volume pada properti data
    //   this.volume = currentVolume;
    // },
    openChatbox() {
      EventBus.$emit("openChatbox"); // Mengirim sinyal ke komponen chatbox
    },
  },
};
</script>
