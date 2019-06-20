<template>
  <div class="board">
    <board-cell v-for="(cell, key) in board" :key="key" :property="cell" :index="key"></board-cell>
  </div>
</template>

<style lang="css">

.board {
  width: 21em;
  height: 21em;
  margin: 2em auto 0;
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
import BoardCell from './BoardCell.vue';

export default {
  store: {
    board: 'board.board',
    winner: 'board.winner',
  },
  components: {
    BoardCell,
  },
  watch: {
    winner() {
      this.$router.push('/gameover');
    },
  },
};
</script>
