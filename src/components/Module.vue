<template>
  <div>
    <h1>{{ name }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Module",
  props: {
    name: String
  }
};
</script>

<style scoped>
</style>
