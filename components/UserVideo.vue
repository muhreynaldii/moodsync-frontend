<template>
  <div v-if="streamManager" class="w-[100%] h-[100%] object-fill">
    <ov-video
      :stream-manager="streamManager"
      :meeting-id="meetingId"
      :user-id="userId"
      :type="type"
    />
    <!-- <div>
      <p>{{ clientData }}</p>
    </div> -->
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
