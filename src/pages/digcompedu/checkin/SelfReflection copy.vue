<template>
  <q-page padding class="bg-white">
    <div class="row q-pa-md">
      <div>
        <p class="col-12 text-h5 text-left">Autoreflexão individual</p>
      </div>
      <q-separator color="primary" class="full-width" />
      <br />

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
          v-bind:standalone="false"
          v-bind:timer="true"
          timer-start-step="html_1"
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

  setup() {
    let questionPrepared = ref([]);
    areasList[0].subareas.forEach((a) => {
      let qModel = new QuestionModel();
      qModel.id = a.id;
      qModel.title = a.question;
      qModel.content = a.description;
      a.options.forEach((op) => {
        qModel.options.push(op.label);
      });
      questionPrepared.value.push(qModel);
    });
    console.log(JSON.stringify(questionPrepared));
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
      answers: {
        html_1: ["2", "3"],
        html_2: "false",
        html_3: "2",
        html_4: ["3", "4"],
        ux_1: ["1", "2", "4"],
        ux_2: "false",
        ux_3: "4",
        ux_4: "true",
      },
      language: new LanguageModel(),
      // Create question list with QuestionModel instances
      questions: [
        new QuestionModel({
          id: "start",
          tagline: "8 questions",
          title: "How much do you know about forms?",
          content: "Test how well you know HTML forms in the first quiz section.",
          type: QuestionType.SectionBreak,
          required: true,
        }),
        new QuestionModel({
          id: "html_1",
          title: "Which of the following are valid input field types?",
          helpText: "Choose all answers that apply.",
          type: QuestionType.MultipleChoice,
          required: true,
          multiple: true,
          options: [
            new ChoiceOption({
              label: "check",
              value: "1",
            }),
            new ChoiceOption({
              label: "date",
              value: "2",
            }),
            new ChoiceOption({
              label: "image",
              value: "3",
            }),
            new ChoiceOption({
              label: "telephone",
              value: "4",
            }),
          ],
        }),
        new QuestionModel({
          id: "html_2",
          title: '<label> is associated with <input> using the "name" attribute.',
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          required: true,
          multiple: false,
          options: [
            new ChoiceOption({
              label: "True",
              value: "true",
            }),
            new ChoiceOption({
              label: "False",
              value: "false",
            }),
          ],
        }),
        new QuestionModel({
          id: "html_3",
          title: "Which HTML element is used to define a dropdown list?",
          helpText: "Which one sounds right? There's only one right answer.",
          type: QuestionType.MultipleChoice,
          required: true,
          multiple: false,
          options: [
            new ChoiceOption({
              label: "<form>",
              value: "1",
            }),
            new ChoiceOption({
              label: "<select>",
              value: "2",
            }),
            new ChoiceOption({
              label: "<fieldset>",
              value: "3",
            }),
            new ChoiceOption({
              label: "<legend>",
              value: "4",
            }),
          ],
        }),
        new QuestionModel({
          id: "html_4",
          title: "To which elements can :invalid pseudo class be applied?",
          type: QuestionType.MultipleChoice,
          multiple: true,
          helpText: "Select one or more correct answers.",
          required: true,
          options: [
            new ChoiceOption({
              label: "<legend>",
              value: "1",
            }),
            new ChoiceOption({
              label: "<fieldset>",
              value: "2",
            }),
            new ChoiceOption({
              label: "<form>",
              value: "3",
            }),
            new ChoiceOption({
              label: "<input>",
              value: "4",
            }),
          ],
        }),
        new QuestionModel({
          title: "Excellent! You are halfway through.",
          content:
            "Form UX is important too. Test your form usability knowledge in the following section.",
          type: QuestionType.SectionBreak,
        }),
        new QuestionModel({
          id: "ux_1",
          title: "How to reduce the perceived complexity of the long form?",
          type: QuestionType.MultipleChoice,
          multiple: true,
          helpText: "Select all that apply.",
          required: true,
          options: [
            new ChoiceOption({
              label: "Divide the form into multiple steps",
              value: "1",
            }),
            new ChoiceOption({
              label: "Add progress tracking",
              value: "2",
            }),
            new ChoiceOption({
              label: "Use as many emojis as possible",
              value: "3",
            }),
            new ChoiceOption({
              label: "Group questions into sections",
              value: "4",
            }),
          ],
        }),
        new QuestionModel({
          id: "ux_2",
          title: "Error messages are bad because they confuse users.",
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          required: true,
          options: [
            new ChoiceOption({
              label: "True",
              value: "true",
            }),
            new ChoiceOption({
              label: "False",
              value: "false",
            }),
          ],
        }),
        new QuestionModel({
          id: "ux_3",
          title: "How to make the input format clear?",
          type: QuestionType.MultipleChoice,
          multiple: false,
          helpText: "Select one correct answer.",
          required: true,
          options: [
            new ChoiceOption({
              label: "Add progress bar to the form",
              value: "1",
            }),
            new ChoiceOption({
              label: "Mark required vs. optional fields",
              value: "2",
            }),
            new ChoiceOption({
              label: "Use bold color palette",
              value: "3",
            }),
            new ChoiceOption({
              label: "Use placeholder and masked input",
              value: "4",
            }),
          ],
        }),
        new QuestionModel({
          id: "ux_4",
          title: "Inline validation should have a real time feedback.",
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          required: true,
          options: [
            new ChoiceOption({
              label: "True",
              value: "true",
            }),
            new ChoiceOption({
              label: "False",
              value: "false",
            }),
          ],
        }),
      ],
    };
  },
  methods: {
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
          if (typeof answer === "object") {
            answer.sort((a, b) => a - b);
            if (this.arrayEquals(answer, this.answers[question.id])) {
              this.score++;
            }
          }
          if (answer == this.answers[question.id]) {
            this.score++;
          }
        }
      });
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
