import Vue from 'vue';
// @ts-ignore
import VueStash from 'vue-stash';
import StringCollection from './component/stringcollection';
import Board from './component/board';

// @ts-ignore

Vue.use(VueStash);

export default class Store {
  stringcollection: StringCollection;

  board: Board;

  constructor() {
    this.stringcollection = new StringCollection();
    this.board = new Board();
  }

  startNewGame() {
    this.stringcollection = new StringCollection();
    this.board = new Board();
  }
}
