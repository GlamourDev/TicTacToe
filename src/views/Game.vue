<template>
  <div class="content-wrapper">
    <string-collection />
    <board />
  </div>
</template>

<script>
import StringCollection from '../components/StringCollection.vue';
import Board from '../components/Board.vue';

export default {
  name: 'game',
  components: {
    StringCollection,
    Board,
  },
  beforeCreate() {
    this.$store.startNewGame();
    this.$store.stringcollection.setTemplates('startGame');
  },
};
</script>
