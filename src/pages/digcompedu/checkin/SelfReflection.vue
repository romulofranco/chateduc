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
              <span class="fh2">Autorreflexão concluída.</span>
              <span v-if="!submitted" class="f-section-text">
                Você pode voltar para suas respostas ou pode enviar para calcular o seu
                nível de competência digital.
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
                aria-label="Confirmar"
              >
                <span>Calcular nível de competência</span>
              </button>
              <a
                class="f-enter-desc"
                href="#"
                v-on:click.prevent="onQuizSubmit()"
                v-html="language.formatString(language.pressEnter)"
              >
              </a>
            </div>
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
  LanguageModel
} from "@ditdot-dev/vue-flow-form";
import { areasList } from "../areas/areas";
import { defineComponent, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  name: "PageSelfReflexion",
  components: {
    FlowForm
  },

  setup() {
  },

  data() {
    const table = "checkin";
    const router = useRouter();
    const route = useRoute();
    const { postSelect } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const checkinTable = ref([]);


    const saveCheckin = async (form, checkinArea) => {
      try {
        let data = await postSelect(table, form, checkinArea);
        notifySuccess("Autorreflexão realizada com sucesso");

        let checkinId = data[0].id;

        router.push({ name: 'digcompedu-checkin-form', params: { id: checkinId } })
        return data;
      } catch (error) {
        notifyError(error.message)
      }
    };


    return {
      table,
      saveCheckin,
      areasList,
      submitted: false,
      completed: false,
      scoreTotal: 0,
      total: 192,
      time: 0,
      formattedTime: "",

      language: new LanguageModel({
        continue: "Continuar",
        ok: "Próximo",
        pressEnter: "Ou pressione Enter",
        submitText: "Enviar"
        // Your language definitions here (optional).
        // You can leave out this prop if you want to use the default definitions.
      }),
      // Create question list with QuestionModel instances
      questions: this.prepareQuestions(),
      checkinTable
    };
  },

  methods: {

    prepareFirstFinalQuestion(starting) {
      let qModel = new QuestionModel();

      qModel.id = "X";
      qModel.tagline = "Nível de competência do professor";
      qModel.subtitle =
        "O DigCompEdu distingue seis estágios ou níveis ao longo dos quais a competência digital dos educadores normalmente se desenvolve. Para cada estágio, é fornecido um descritor de função que reflete o foco específico do uso da tecnologia digital típico do estágio de competência. Esses descritores de papéis também se relacionam com os pontos fortes e papéis relativos de um educador dentro de uma comunidade profissional.";
      qModel.type = QuestionType.MultipleChoice;
      qModel.required = true;
      qModel.title =
        "Qual seu provável nível de competência " +
        (starting ? "atual" : "após completar o questionário") +
        "?";
      qModel.helpText =
        "Diante desta definição, qual provavelmente seria seu " +
        (starting ? "atual" : "") +
        "nível de competência?";

      qModel.options.push(this.prepareLevelSelect("A1 - Iniciante", 1));
      qModel.options.push(this.prepareLevelSelect("A2 - Explorador", 2));
      qModel.options.push(this.prepareLevelSelect("B1 - Integrador", 3));
      qModel.options.push(this.prepareLevelSelect("B2 - Especialista", 4));
      qModel.options.push(this.prepareLevelSelect("C1 - Líder", 5));
      qModel.options.push(this.prepareLevelSelect("C2 - Pioneiro", 6));

      return qModel;
    },

    prepareLevelSelect(label, value) {
      let opChoice = new ChoiceOption();
      opChoice.label = label;
      opChoice.value = value;
      opChoice.id = value;
      return opChoice;
    },

    prepareQuestions() {
      const questionPrepared = ref([]);

      let qModel = this.prepareFirstFinalQuestion(true);
      questionPrepared.value.push(qModel);

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
          qModel.title = a.question;
          qModel.content = a.description;
          qModel.type = QuestionType.MultipleChoice;
          qModel.required = true;
          qModel.multiple = false;
          qModel.tagline = a.id + " - " + a.name;
          qModel.helpText =
            "Escolha uma alternativa que melhor reflete a sua realidade considerando as competências digitais relacionadas à " +
            area.name;

          a.options.forEach((op) => {
            let opChoice = new ChoiceOption();
            opChoice.label = op.label;
            opChoice.value = op.value;
            opChoice.id = op.id;
            qModel.options.push(opChoice);
          });

          questionPrepared.value.push(qModel);
        });
      });

      questionPrepared.value.push(this.prepareFirstFinalQuestion(false));
      return questionPrepared;
    },

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
      let idxArea = 0;
      let score = 0;

      let mainArea = {
        id_txt: this.questions[1].id,
        name: this.questions[1].tagline,
        cor: this.areasList[idxArea].cor,
        question: this.questions[1].content,
        main_area: true
      };

      const checkin = [];

      this.questions.slice(2, this.questions.length - 1).forEach((question) => {
        if (question.type !== QuestionType.SectionBreak) {
          let answer = question.options[question.answer].label;

          score = score + question.answer;
          this.scoreTotal = this.scoreTotal + question.answer;

          let areaCheckin = {
            id_txt: question.id,
            name: question.tagline,
            cor: this.areasList[idxArea].cor,
            question: question.content,
            answer: answer,
            main_area: false,
            grade_area: question.answer,
            id_level: question.answer
          };
          checkin.push(areaCheckin);
        } else {
          if (question.type === QuestionType.SectionBreak) {
            mainArea.grade_area = score;
            score = 0;
            checkin.push(mainArea);

            idxArea++;

            if (idxArea < 6) {
              mainArea = {
                id_txt: this.areasList[idxArea].id,
                name: question.tagline,
                cor: this.areasList[idxArea].cor,
                question: question.content,
                main_area: true
              };
            }
          }
        }
      });

      mainArea.grade_area = score;
      checkin.push(mainArea);

      return checkin;
    },

    fillCheckinTable() {
      let levelResult = this.scoreTotal;
      if (levelResult < 33) {
        this.checkinTable.prof_result = "A1 - Iniciante";
        this.checkinTable.level_result_img = "a1";
        this.checkinTable.id_level = 1;
      } else if (levelResult > 32 && levelResult < 65) {
        this.checkinTable.prof_result = "A2 - Explorador";
        this.checkinTable.id_level = 2;
        this.checkinTable.level_result_img = "a2";
      } else if (levelResult > 64 && levelResult < 97) {
        this.checkinTable.prof_result = "B1 - Integrador";
        this.checkinTable.id_level = 3;
        this.checkinTable.level_result_img = "b1";
      } else if (levelResult > 96 && levelResult < 129) {
        this.checkinTable.prof_result = "B2 - Especialista";
        this.checkinTable.id_level = 4;
        this.checkinTable.level_result_img = "b2";
      } else if (levelResult > 128 && levelResult < 161) {
        this.checkinTable.prof_result = "C1 - Líder";
        this.checkinTable.id_level = 5;
        this.checkinTable.level_result_img = "c1";
      } else if (levelResult > 160 && levelResult < 193) {
        this.checkinTable.prof_result = "C2 - Pioneiro";
        this.checkinTable.id_level = 6;
        this.checkinTable.level_result_img = "c2";
      }

      this.checkinTable.prof_expected = this.questions[0].options[
        this.questions[0].answer
        ].label;
      this.checkinTable.prof_after = this.questions[this.questions.length - 1].options[
        this.questions[this.questions.length - 1].answer
        ].label;
      this.checkinTable.grade = levelResult;
    },

    onQuizSubmit() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.

      let checkinArea = this.calculateScore();
      this.fillCheckinTable();

      //let checkinId = this.saveCheckin(this.table, this.checkinTable);
      let checkinId = this.saveCheckin(this.checkinTable, checkinArea).then(function(d) {
        alert(d);
      });

      // this.checkinTable.checkin_areas = checkinArea;
      console.log(this.checkinTable);

      // this.$refs.flowform.submitted = true;
      // this.submitted = true;

      alert(checkinId);
    },


    onTimer(time, formattedTime) {
      this.time = formattedTime;
      this.formattedTime = formattedTime;
    }
  }
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

.f-sub {
  font-size: 16px !important;
  color: black !important;
  font-weight: 400 !important;
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

.f-help {
  color: black !important;
  font-weight: 600 !important;
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
