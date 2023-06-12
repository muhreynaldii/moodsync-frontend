<template>
  <div class="container">
    <div class="chat" style="background-color: #EBF5FF;">
      <div class="menu">
        <button
          :class="['menu-button', { active: showGroup }]"
          @click="showGroupChat"
        >
          Group
        </button>
        <button
          :class="['menu-button', { active: showPrivate }]"
          @click="showPrivateChat"
          :disabled="!showGroup"
        >
          Personal
        </button>
      </div>
      <!-- Daftar pesan chat -->
      <div class="messages">
        <div v-for="message in messages" :key="message.id" class="message">
          <div :class="['bubble', {'right': message.isMe}, {'left': !message.isMe}]">
            <div class="author-time">
              <span class="author">{{ message.author }}</span>
              <span class="time">{{ message.time }}</span>
            </div>
            <div class="text">{{ message.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <div class="chat-input">
        <input v-model="newMessage" @keyup.enter="sendMessage" type="text" placeholder="Ketik pesan..." class="input" />
      </div>
      <div class="send-button-container">
        <button @click="sendMessage" class="send-button">
          Kirim
        </button>
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
      currentUser: null, // Informasi pengguna yang login
      showGroup: true, // Status tampilan grup chat (diatur sebagai default)
      showPrivate: false, // Status tampilan private chat
    };
  },
  created() {
    // Mengambil informasi pengguna yang login (dapat disesuaikan dengan sistem autentikasi yang digunakan)
    // Contoh menggunakan Vuex untuk mengambil informasi pengguna yang login
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        const currentTime = new Date().toLocaleTimeString();
        this.messages.push({
          id: this.messages.length + 1,
          author: this.currentUser ? this.currentUser.name : 'Anda', // Menggunakan nama pengguna yang login jika ada, jika tidak menggunakan "Anda"
          text: this.newMessage,
          time: currentTime,
          isMe: true, // Menandai pesan sebagai pesan dari diri sendiri
        });
        this.newMessage = '';
      }
    },
    showGroupChat() {
      this.showGroup = true;
      this.showPrivate = false;
      // Logika untuk menampilkan grup chat
    },
    showPrivateChat() {
      this.showGroup = false;
      this.showPrivate = true;
      // Logika untuk menampilkan private chat
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

.menu {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
}

.menu-button {
  color: #b3b6bb;
  width: 190px;
  display: flex;
  padding: 6px 24px;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  border-width: 0px;
  border-radius: 8px;
  justify-content: center;
  text-decoration: none;
}
.menu-button:hover{
  color: #9a9da1;
}
 
.menu-button.active {
  background-color: var(--dl-color-primary-7002);
  color: white;
}

.chat {
  flex-grow: 1;
  border: 1px solid;
  border-color: rgba(229, 231, 235, 1);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 5px;
  overflow: auto;
}

.messages {
  margin-bottom: 10px;
}

.message {
  padding: 2px;
  margin-bottom: 5px;
}

.bubble {
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #D1D5DB;
  background-color: #fbfcfd;
}

.bubble.right {
  align-self: flex-end;
}

.bubble.left {
  align-self: flex-start;
}

.author {
  font-weight: bold;
}

.input-container {
  display: flex;
  border-radius: 8px;
  border: 1px solid rgba(229, 231, 235, 1);
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
  background-color: unset;
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
  background-color: var(--dl-color-primary-600);
}
.send-button:hover{
  background-color: var(--dl-color-primary-700);
}

.time {
  font-size: 12px;
  color: #919191;
}

.text {
  margin-left: 10px;
}

.author-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
</style>
