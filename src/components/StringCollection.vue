<template>
    <div class="strings">
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
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

<style>
.strings {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
