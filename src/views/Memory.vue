<template>
  <Module name="On the subject of memory">
    <h3>Step {{currentStep}}</h3>
    <div class="question">
      <label for="display">What is displayed?</label>
      <div class="display-choices">
        <button v-on:click="displayLabel(1)">1️⃣</button>
        <button v-on:click="displayLabel(2)">2️⃣</button>
        <button v-on:click="displayLabel(3)">3️⃣</button>
        <button v-on:click="displayLabel(4)">4️⃣</button>
      </div>
    </div>

    <div v-if="instructions.label" class="instructions">
      <span>Press the button labeled "{{ instructions.label }}"</span>
      <span v-if="currentStep === 5">, and done ✅</span>
    </div>
    <div v-if="instructions.position" class="instructions">
      <span>Press on button at position {{ instructions.position }}</span>
      <span v-if="currentStep === 5">, and done ✅</span>
    </div>
    

    <div v-if="askingPosition" class="question">
      <label for="display">What is the position of that label?</label>
      <div class="display-choices">
        <button v-on:click="setPosition(1)">1️⃣</button>
        <button v-on:click="setPosition(2)">2️⃣</button>
        <button v-on:click="setPosition(3)">3️⃣</button>
        <button v-on:click="setPosition(4)">4️⃣</button>
      </div>
    </div>
    <div v-if="askingLabel" class="question">
      <label for="display">What is the label of the button?</label>
      <div class="display-choices">
        <button v-on:click="setLabel(1)">1️⃣</button>
        <button v-on:click="setLabel(2)">2️⃣</button>
        <button v-on:click="setLabel(3)">3️⃣</button>
        <button v-on:click="setLabel(4)">4️⃣</button>
      </div>
    </div>

    
  </Module>
</template>

<script>
import Module from "@/components/Module.vue";

export default {
  name: "memory",
  data() {
    return {
      currentStep: 1,
      displayed: null,
      steps: []
    };
  },
  methods: {
    displayLabel: function(displayed) {
      this.displayed = displayed;
      this.steps[this.currentStep] = {
        ...this.instructions
      };
    },
    setLabel: function(label) {
      this.steps[this.currentStep].label = label;
      this.currentStep++;
      this.displayed = null;
    },
    setPosition: function(position) {
      this.steps[this.currentStep].position = position;
      this.currentStep++;
      this.displayed = null;
    }
  },
  computed: {
    askingLabel: function() {
      return (
        this.currentStep < 5 && this.displayed && this.instructions.position
      );
    },
    askingPosition: function() {
      return this.currentStep < 5 && this.displayed && this.instructions.label;
    },
    instructions: function() {
      if (!this.displayed) return {};
      if (this.currentStep === 1) {
        switch (this.displayed) {
          case 1:
          case 2:
            return { position: 2 };
          case 3:
            return { position: 3 };
          case 4:
            return { position: 4 };
        }
      }

      if (this.currentStep === 2) {
        switch (this.displayed) {
          case 1:
            return { label: 4 };
          case 2:
          case 4:
            return {
              position: this.steps[1].position
            };
          case 3:
            return { position: 1 };
        }
      }

      if (this.currentStep === 3) {
        switch (this.displayed) {
          case 1:
            return { label: this.steps[2].label };
          case 2:
            return { label: this.steps[1].label };
          case 3:
            return { position: 3 };
          case 4:
            return { label: 4 };
        }
      }

      if (this.currentStep === 4) {
        switch (this.displayed) {
          case 1:
            return { position: this.steps[1].position };
          case 2:
            return { position: 1 };
          case 3:
          case 4:
            return { position: this.steps[2].position };
        }
      }

      if (this.currentStep === 5) {
        switch (this.displayed) {
          case 1:
            return { label: this.steps[1].label };
          case 2:
            return { label: this.steps[2].label };
          case 3:
            return { label: this.steps[4].label };
          case 4:
            return { label: this.steps[3].label };
        }
      }

      return null;
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
.display-choices {
  display: flex;
  justify-content: space-around;
  padding: 12px;
}
.display-choices button {
  font-size: 2em;
}
</style>
