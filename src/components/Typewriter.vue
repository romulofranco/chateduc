<template>
  <p class="text-h3 text-white">
    {{ " " + title + " " }}
    <span class="text-bold">{{ displayText.join("") }} </span>
  </p>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    speed: {
      type: Number,
      default: 500
    },
    deleteSpeed: {
      type: Number,
      default: 166
    },
    words: {
      type: Array
    }
  },
  data() {
    return {
      displayText: [],
      currentWord: " ",
      wordIdx: 0,
      timeoutSpeed: 10
    };
  },
  computed: {
    // can adjust speeds based on other factors if needed
    TYPE_SPEED() {
      return this.speed;
    },
    DELETE_SPEED() {
      return this.deleteSpeed;
    }
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.words[this.wordIdx].split("");
        this.wordIdx++;
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
    },
    type(word) {
      // if typing...
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());
        // if done typing, then delete
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.timeoutSpeed = this.DELETE_SPEED;
        this.displayText.pop();
        // if done typing & deleting
      } else if (
        this.currentWord.length === 0 &&
        this.displayText.length === 0
      ) {
        // change words
        if (this.wordIdx < this.words.length) {
          this.currentWord = this.words[this.wordIdx].split("");
          this.wordIdx++;
          this.timeoutSpeed = this.TYPE_SPEED;
          this.displayText.push(this.currentWord.shift());
        } else {
          // reset
          this.wordIdx = 0;
          this.currentWord = this.words[this.wordIdx].split("");
          this.displayText.push(this.currentWord.shift());
        }
      }
      setTimeout(this.type, this.timeoutSpeed);
    }
  }
};
</script>
