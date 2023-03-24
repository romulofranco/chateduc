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
import {
  FlowForm,
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LanguageModel,
} from "@ditdot-dev/vue-flow-form";
import { areasList } from "../areas/areas";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PageSelfReflexion",
  components: {
    FlowForm,
  },

  setup() {},

  data() {
    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          await update(table, form.value);
          notifySuccess("Categoria atualizada com sucesso");
        } else {
          await post(table, form.value);
          notifySuccess("Categoria inserida com sucesso");
        }

        router.push({ name: "category" });
      } catch (error) {
        notifyError(error.message);
      }
    };

    const checkinTable = ref([
      {
        user_id: 1,
        prof_expected: "",
        prof_result: "",
        grade: 0,
        main_statement: "",
        level_result_img: "",
        checkin_areas: [
          {
            id_area: 0,
            id_txt: "",
            name: "",
            cor: "",
            subcor: "",
            question: "",
            answer: "",
            grade_area: 0,
            main_area: true,
          },
        ],
      },
    ]);

    return {
      checkinTable,
      handleSubmit,
      areasList,
      submitted: false,
      completed: false,
      score: 0,
      total: 8,
      time: 0,
      formattedTime: "",

      language: new LanguageModel({
        continue: "Continuar",
        ok: "Próximo",
        pressEnter: "Ou pressione Enter",
        submitText: "Enviar",
        // Your language definitions here (optional).
        // You can leave out this prop if you want to use the default definitions.
      }),
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
          qModel.helpText =
            "Escolha uma alternativa que melhor reflete a sua realidade considerando as competências digitais relacionadas à " +
            area.name;

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
  color: orangered !important;
}
.o-btn-action {
  background-color: orangered !important;
  color: white;
}
.f-label {
  color: black !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.vff {
  font-size: 18px !important;
}

.vff {
  margin: 30px 5px !important;
}
.vff .fh2,
.vff h2 {
  font-size: 14px !important;
  margin: 0 0 0 0 !important;
  line-height: 25px !important;
}

.f-tagline {
  color: black !important;
  font-weight: 900 !important;
}
.vff .fh2 .f-tagline {
  font-size: 20px !important;
  font-weight: 500px !important;
  color: orangered !important;
}
.vff .f-radios-desc,
.vff ul.f-radios li,
.vff ul.f-radios li input[type="text"] {
  font-size: 14px !important;
}
.vff ul.f-radios li {
  border: 0px solid var(--vff-secondary-text-color) !important;
}

.vff ul.f-radios li.f-selected,
.vff ul.f-radios li:active {
  background-color: #f5cd99;
}

.f-label-wrap {
  width: 100% !important;
}
.vff .f-help {
  font-size: 14px !important;
  font-weight: 500px !important;
  color: rgb(24, 23, 23) !important;
}

.f-enter-desc {
  color: black !important;
}
.f-text {
  font-size: 18px !important;
}
.f-label {
  font-size: 15px !important;
  font-weight: 200px !important;
}

.f-key {
  font-size: 15px !important;
  font-weight: 200px !important;
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

.o-btn-action {
  color: white !important;
}

/* Import Vue Flow Form base CSS */
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css";
/* Import one of the Vue Flow Form CSS themes (optional) */
/* @import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css"; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css";
</style>
