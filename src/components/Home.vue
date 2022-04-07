<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        multiple
        chips
        prepend-icon="mdi-message-text"
        outlined
        append-outer-icon="mdi-send"
        @click:append-outer="processSubtitles"
        v-model="files"
        label="Selecione as Legendas"
      />
    </v-form>
    <div class="pills">
      <Pill
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import Pill from "./Pill.vue";
import { ipcRenderer } from "electron";

export default {
  data() {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map((f) => f.path);
      ipcRenderer.send("process-subtitle", paths);

      ipcRenderer.on("process-subtitle", (event, res) => {
        console.log(res);
        this.groupedWords = res;
      });
    },
  },
  components: { Pill },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
