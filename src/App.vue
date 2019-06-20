<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  store: ["userid"],
  components: {}
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
