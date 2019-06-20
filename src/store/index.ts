import Vue from 'vue';
// @ts-ignore
import VueStash from 'vue-stash';
import Board from './component/board';

// @ts-ignore

Vue.use(VueStash);

export default class Store {

  board: Board;

  constructor() {
    this.board = new Board();
  }
}
