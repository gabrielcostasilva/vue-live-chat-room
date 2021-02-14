<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div class="messages" ref="messages" v-if="formattedDocuments">
      <div class="single" v-for="doc in formattedDocuments" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";

export default {
  data() {
    return {
      error: "",
      documents: [],
      messages: "",
    };
  },
  created() {
    const { error, documents } = getCollection("messages");
    this.error = error;
    this.documents = documents;
  },
  computed: {
    formattedDocuments: function () {
      if (this.documents) {
        return this.documents.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    },
  },
  updated() {
    this.$refs.messages.scrollTop = this.$refs.messages.scrolHeight;
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>