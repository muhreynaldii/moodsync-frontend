<template>
  <div class="chat-component">
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id" class="chat-message">
        <span class="chat-sender">{{ message.sender }}</span>
        <span class="chat-content">{{ message.content }}</span>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Type your message..." />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        const message = {
          id: Date.now(),
          sender: 'Me',
          content: this.newMessage,
        };

        this.messages.push(message);
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.chat-component {
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
}

.chat-message {
  margin-bottom: 10px;
}

.chat-sender {
  font-weight: bold;
}

.chat-content {
  margin-left: 10px;
}

.chat-input {
  margin-top: auto;
  padding: 10px;
  position: absolute;
  bottom: 100px; 
  /* Ganti dengan properti CSS lain sesuai kebutuhan */
}
</style>
