<template>
  <div class="container">
    <div class="chat">
      <!-- Daftar pesan chat -->
      <div class="messages">
        <div v-for="message in messages" :key="message.id" class="message">
          <div :class="['bubble', {'right': message.isMe}, {'left': !message.isMe}]">
          <span class="author">{{ message.author }}:</span>
          {{ message.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <div class="chat-input">
        <input v-model="newMessage" @keyup.enter="sendMessage" type="text" placeholder="Ketik pesan..." class="input" />
      </div>
      <div class="send-button-container">
        <button @click="sendMessage" class="send-button">Kirim</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
      currentUser: null // Informasi pengguna yang login
    };
  },
  created() {
    // Mengambil informasi pengguna yang login (dapat disesuaikan dengan sistem autentikasi yang digunakan)
    // Contoh menggunakan Vuex untuk mengambil informasi pengguna yang login
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({
          id: this.messages.length + 1,
          author: this.currentUser ? this.currentUser.name : 'Anda', // Menggunakan nama pengguna yang login jika ada, jika tidak menggunakan "Anda"
          text: this.newMessage,
          isMe: true // Menandai pesan sebagai pesan dari diri sendiri
        });
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.chat {
  flex-grow: 1;
  border: 2px solid #D1D5DB;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 5px;
  overflow: auto; /* Tambahkan aturan ini */
}

.messages {
  margin-bottom: 10px;
}

.message {
  padding: 2px;
  margin-bottom: 5px;
}

.author {
  font-weight: bold;
}

.input-container {
  display: flex;
  border: 2px solid #D1D5DB;
  border-radius: 16px;
  padding: 10px;
}

.chat-input {
  flex-grow: 1;
}

.send-button-container {
  margin-left: 10px;
}

.input {
  width: 100%;
  padding: 5px;
  border: none;
  border-right: 1px solid #D1D5DB;
}

.send-button {
  color: white;
  gap: 8px;
  width: fit-content;
  display: flex;
  padding: 6px 24px;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  border-width: 0px;
  border-radius: 8px;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-primary-7002);
}
</style>
