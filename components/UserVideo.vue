<template>
  <div v-if="streamManager" class="relative h-[100%] w-[100%] object-cover">
    <ov-video
    :stream-manager="streamManager"
    :meeting-id="meetingId"
    :user-id="userId"
    :type="type"
    controls
    />
    <div class="absolute bottom-[7px] left-[6px] rounded-[4.5px] bg-white/30">
      <p class="text-medium px-[7px] text-center text-[30px] text-white">
        {{ clientData }}
      </p>
    </div>
  </div>
</template>

<script>
import OvVideo from "./OvVideo";

export default {
  name: "UserVideo",

  components: {
    OvVideo,
  },

  props: {
    streamManager: Object,
    type: String,
    meetingId: String,
    userId: String,
  },

  computed: {
    clientData() {
      const { clientData } = this.getConnectionData();
      return clientData;
    },
  },

  methods: {
    getConnectionData() {
      const { connection } = this.streamManager.stream;
      return JSON.parse(connection.data);
    },
  },
};
</script>
