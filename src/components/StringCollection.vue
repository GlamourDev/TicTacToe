<template>
    <div class="strings">
        <h1 class="strings--title">{{ title }}</h1>
        <h3 class="strings--subtitle">{{ subtitle }}</h3>
    </div>
</template>

<script>
export default {
  name: 'string-collection',
  store: {
    title: 'stringcollection.title',
    title2: 'stringcollection.templates',
    subtitle: 'stringcollection.subtitle',
  },
};
</script>

<style lang="scss">
.strings {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  &--title {
    font-size: 2.5em;
    font-weight: 600;
  }

  &--subtitle {
    margin-top: 1em;
    font-size: 1.5em;
  }
}
</style>
