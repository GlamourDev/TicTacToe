<template>
  <div class="board-cell" v-html="propertyHTML"
       :class="propertyClass"
       @click="setPlayerProperty">
  </div>
</template>

<script>
export default {
  store: ['board'],
  props: ['property', 'index'],
  computed: {
    propertyClass() {
      return this.property
        ? `board-cell__${this.property}`
        : this.board.enable
          ? 'board-cell__enable'
          : '';
    },
    propertyHTML() {
      switch (this.property) {
        case 'player':
          return '<i class="fa fa-times fa-5x symbol"></i>';
        case 'ai':
          return '<i class="fa fa-circle-o fa-5x symbol"></i>';
        default:
          return '';
      }
    },
  },
  methods: {
    setPlayerProperty() {
      if (!this.property && this.board.enable) {
        this.board.setPlayerProperty(this.index);
      }
    },
  },
};
</script>

<style>
.board-cell {
  width: 6.8em;
  height: 6.8em;
  margin: 0.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EBEEE7;
  border-radius: 4px;
  box-sizing: border-box;
  transition: background-color 250ms;
}

</style>
