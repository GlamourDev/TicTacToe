<template>
  <div class="board">
    <board-cell v-for="(cell, key) in board" :key="key" :property="cell" :index="key"></board-cell>
    <div class="counter-holder">
    <h3 style="margin-right:10px;">W:{{ winCount }}</h3>
    <h3>L:{{ loseCount }}</h3>
    </div>
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

.counter-holder {
  margin-top:10px;
  display: flex;
}
</style>

<script>
import BoardCell from './BoardCell.vue';

export default {
  store: {
    board: 'board.board',
    winner: 'board.winner',
    loseCount: 'board.winnerAi',
    winCount: 'board.winnerPlayer',
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
