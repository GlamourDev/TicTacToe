<template>
  <div class="retry-modal">
    <button class="retry-modal" @click="acceptRestart">
      <i class="fa fa-check fa-3x"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'retry-modal',
  methods: {
    acceptRestart() {
      this.$router.push('/');
    },
  },
};
</script>

<style>

.retry-modal {
  margin-top: 4em;
  display: flex;
  justify-content: center;
}
</style>
