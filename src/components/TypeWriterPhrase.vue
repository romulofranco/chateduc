<template>
  <span>
    {{ text }}
    <span class="cursor">|</span>
  </span>
</template>

<script>

import {ref, onMounted, reactive} from "vue";

export default {
    props: {
        speed: {
            type: Number,
            default: 100,
        },
        deleteSpeed: {
            type: Number,
            default: 30,
        },
        nextWordInterval: {
            type: Number,
            default: 1200
        },
        content: {
            type: String,
            default: "Ola tudo bem",
        },
    },
    data() {
        const opt = reactive({
            currentPhraseIndex: 0,
            currentCharacterIndex: 0,
            currentPhrase: "",
            isDeleting: false
        })
        const phrases = reactive([
            //this.content.value
        ])
        const text = ref('')
        const loop = () => {
            const currentPhraseText = this.content;
            if (!opt.isDeleting) {
                opt.currentPhrase += currentPhraseText[opt.currentCharacterIndex];
                opt.currentCharacterIndex++;
            }
            // else {
            //     opt.currentPhrase = opt.currentPhrase.slice(0, -1);
            //     opt.currentCharacterIndex--;
            // }
            text.value = opt.currentPhrase;
            if (opt.currentCharacterIndex === currentPhraseText.length) {
                opt.isDeleting = true;
            }
            if (opt.currentCharacterIndex === 0) {
                opt.currentPhrase = "";
                opt.isDeleting = false;
                opt.currentPhraseIndex++;
                if (opt.currentPhraseIndex === opt.phrases?.length) {
                    opt.currentPhraseIndex = 0;
                }
            }
            const spedUp = Math.random() * (15 - 5) + 5;
            const normalSpeed = Math.random() * (15 - 10) + 5;
            const time = opt.isDeleting ? spedUp : normalSpeed;
            setTimeout(loop, time);
        }
        onMounted(() => {
            loop()
        })
        return {
            text,
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

.cursor {
  display: inline-block;
  margin-left: -3px;
  animation: blink-animation 1s steps(2, start) infinite;
}
</style>
