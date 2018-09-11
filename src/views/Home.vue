<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/ktane.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style>
.logo {
  width: 100%;
}
</style>
