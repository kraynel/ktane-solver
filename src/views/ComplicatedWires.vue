<template>
  <Module name="On the subject of complicated wires">
    <div class="question">
      <input type="checkbox" id="checkbox-red" v-model="hasRed">
      <label for="checkbox-red">Has red coloring? 🔴</label>
    </div>

    <div class="question">
      <input type="checkbox" id="checkbox-blue" v-model="hasBlue">
      <label for="checkbox-blue">Has blue coloring? 🔵</label>
    </div>

    <div class="question">
      <input type="checkbox" id="checkbox-star" v-model="hasStar">
      <label for="checkbox-star">Has star symbol? ⭐️</label>
    </div>

    <div class="question">
      <input type="checkbox" id="checkbox-light" v-model="isLit">
      <label for="checkbox-light">Is LED on? 💡</label>
    </div>

    <div class="instructions">
      {{ instructions }}
    </div>
  </Module>
</template>

<script>
import Module from "@/components/Module.vue";

export default {
  name: "complicated-wires",
  data() {
    return {
      hasRed: false,
      hasBlue: false,
      hasStar: false,
      isLit: false
    };
  },
  computed: {
    instructions: function() {
      const res = `${this.hasRed}-${this.hasBlue}-${this.hasStar}-${
        this.isLit
      }`;
      switch (res) {
        case "false-false-false-true":
        case "false-true-true-false":
        case "true-true-true-true":
          return "Do not cut 🚫";
        case "false-false-true-false":
        case "true-false-true-false":
        case "false-false-false-false":
          return "CUT! ✂️";
        case "true-false-false-false":
        case "false-true-false-false":
        case "true-true-false-false":
        case "true-true-false-true":
          return "CUT is last digit of serial # is even! 0️⃣2️⃣4️⃣6️⃣8️⃣";
        case "true-true-true-false":
        case "false-true-true-true":
        case "false-true-false-true":
          return "CUT if the bomb has a parallel port 🔌";
        case "false-false-true-true":
        case "true-false-true-true":
        case "true-false-false-true":
          return "CUT if the bomb has 2 or + batteries 🔋🔋";
        default:
          return "?";
      }
    }
  },
  components: {
    Module
  }
};
</script>

<style>
.instructions {
  font-size: 2em;
  padding: 30px;
}
.question {
  padding: 5px;
}
</style>
