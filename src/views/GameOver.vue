<template>
  <div class="content-wrapper">
    <string-collection />
    <retry-modal />
  </div>
</template>

<script>
import StringCollection from '../components/StringCollection.vue';
import RetryModal from '../components/RetryModal.vue';

export default {
  name: 'game-over',
  store: {
    winner: 'board.winner',
  },
  components: {
    StringCollection,
    RetryModal,
  },
  mounted() {
    this.$store.stringcollection.setTemplates(this.winner);
  },
};
</script>
