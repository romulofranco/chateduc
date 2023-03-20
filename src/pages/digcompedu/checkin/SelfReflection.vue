<template>
  <q-page padding class="bg-white">
    <div class="row q-pa-md">
      <div>
        <p class="col-12 text-h5 text-left">Autoreflexão individual</p>
      </div>
      <q-separator color="primary" class="full-width" />

      <div>
        <flow-form
          class="text-black bg-white"
          style="color: orange"
          ref="flowform"
          v-on:complete="onComplete"
          v-on:submit="onQuizSubmit"
          v-on:timer="onTimer"
          v-bind:questions="questions"
          v-bind:language="language"
          v-bind:standalone="true"
          v-bind:timer="true"
          timer-start-step="1"
        >
          <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
          <!-- We've overriden the default "complete" slot content -->
          <template v-slot:complete>
            <p>
              <span class="fh2">You did it!</span>
              <span v-if="!submitted" class="f-section-text">
                Review your answers or press Calculate score to see your result.
              </span>
            </p>
          </template>

          <!-- We've overriden the default "completeButton" slot content -->
          <template v-slot:completeButton>
            <div class="f-submit" v-if="!submitted">
              <button
                class="o-btn-action"
                ref="button"
                type="submit"
                href="#"
                v-on:click.prevent="onQuizSubmit()"
                aria-label="Press to submit"
              >
                <span>Calculate score</span>
              </button>
              <a
                class="f-enter-desc"
                href="#"
                v-on:click.prevent="onQuizSubmit()"
                v-html="language.formatString(language.pressEnter)"
              >
              </a>
            </div>
            <p class="text-success" v-if="submitted && time">
              Your time: {{ formattedTime }}
            </p>
            <p class="text-success" v-if="submitted && score < 4">
              "You scored {{ score }} out of {{ total }}. There's a lot of room for
              improvement."
            </p>
            <p class="text-success" v-else-if="submitted && score < 7">
              "You scored {{ score }} out of {{ total }}. Not bad at all!"
            </p>
            <p class="text-success" v-else-if="submitted && score <= total">
              "You scored {{ score }} out of {{ total }}. Wow, that's impressive!"
            </p>
          </template>
        </flow-form>
      </div>
    </div>
  </q-page>
</template>

<script>
/*
    Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
    https://www.ditdot.hr/en
  */
// Import necessary components and classes
import {
  FlowForm,
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LanguageModel,
} from "@ditdot-dev/vue-flow-form";
// If using the npm package, use the following line instead of the ones above.
// import FlowForm, { QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'
import { areasList } from "../areas/areas";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PageSelfReflexion",
  components: {
    FlowForm,
  },

  data() {
    return {
      areasList,
      submitted: false,
      completed: false,
      score: 0,
      total: 8,
      time: 0,
      formattedTime: "",

      language: new LanguageModel(),
      // Create question list with QuestionModel instances
      questions: this.prepareQuestions(),
    };
  },
  methods: {
    prepareQuestions() {
      const questionPrepared = ref([]);

      areasList.forEach((area) => {
        let qModel = new QuestionModel();
        qModel.id = area.id;
        qModel.tagline = area.name;
        qModel.content = area.description;
        qModel.type = QuestionType.SectionBreak;
        qModel.required = true;
        qModel.helpText = "Escolha uma alternativa que melhor reflete a sua realidade";
        questionPrepared.value.push(qModel);
        area.subareas.forEach((a) => {
          let qModel = new QuestionModel();
          qModel.id = a.id;
          qModel.tagline = a.id + " - " + a.name;
          qModel.title = a.question;
          qModel.content = a.description;
          qModel.type = QuestionType.MultipleChoice;
          qModel.required = true;
          qModel.multiple = false;
          qModel.helpText = "Escolha uma alternativa que melhor reflete a sua realidade";
          a.options.forEach((op) => {
            let opChoice = new ChoiceOption();
            opChoice.label = op.label;
            opChoice.id = op.id;
            opChoice.value = op.id;
            qModel.options.push(opChoice);
          });
          questionPrepared.value.push(qModel);
        });
      });
      console.log(questionPrepared);
      return questionPrepared;
    },
    /* eslint-disable-next-line no-unused-vars */
    onComplete(completed, questionList) {
      // This method is called whenever the "completed" status is changed.
      this.completed = completed;
    },
    arrayEquals(a, b) {
      return (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])
      );
    },
    calculateScore() {
      this.questions.forEach((question) => {
        if (question.type !== QuestionType.SectionBreak) {
          let answer = question.answer;
          console.log(answer);
          this.score = this.score + answer;
        }
      });
      console.log("total score " + this.score);
    },
    onQuizSubmit() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.
      this.$refs.flowform.submitted = true;

      this.submitted = true;
      this.calculateScore();
    },
    onTimer(time, formattedTime) {
      this.time = formattedTime;
      this.formattedTime = formattedTime;
    },
  },
});
</script>

<style>
.f-key {
  color: orange !important;
}
.o-btn-action {
  background-color: orangered !important;
  color: white;
}
.f-label {
  color: black !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.f-prev .f-next .f-disabled {
  background-color: orange !important;
}
.vff-footer {
  background-color: white !important;
}
.f-progress-bar-inner {
  background-color: orange !important;
}

/* Import Vue Flow Form base CSS */
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css";
/* Import one of the Vue Flow Form CSS themes (optional) */
/* @import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css"; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css";
</style>
