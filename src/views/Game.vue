<template>
  <div class="content-wrapper">
    <board />
  </div>
</template>

<script>
import Board from '../components/Board.vue';

export default {
  name: 'game',
  components: {
    Board
  },
};
</script>
