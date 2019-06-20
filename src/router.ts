import Vue from 'vue';
import Router from 'vue-router';
import Game from './views/Game.vue';
import GameOver from './views/GameOver.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game,
    },
    {
      path: '/gameover',
      name: 'game-over',
      component: GameOver,
    },
  ],
});
