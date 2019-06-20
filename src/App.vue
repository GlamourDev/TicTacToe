<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  store: ['userid'],
  components: {},
};
</script>

<style lang="scss">
@import "./assets/reset";
@import "./assets/styles";
#app {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
