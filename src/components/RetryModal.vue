<template>
  <div class="retry-modal">
    <button class="retry-modal--btn retry-modal--btn__accept" @click="acceptRestart">
      <i class="fa fa-refresh fa-3x"></i>
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

<style lang="scss">
.retry-modal {
  margin-top: 4em;
  display: flex;
  justify-content: center;

  &--btn {
    width: 4em;
    height: 4em;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;

    &__accept {
      background-color: #8bc34a;
    }
  }
}
</style>
