<template>
  <q-page class=" row justify-center items-center">
    <q-form class="row justify-center" @submit.prevent="handlerRegister">
      <q-card square class="q-pa-sm shadow-1">
        <q-card-section>
          <p class="login col-12 text-h6 text-left">Entre em contato</p>
        </q-card-section>

        <q-card-section>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
            <q-input
              bottom-slots
              v-model="form.name"
              label="Nome"
              counter
              maxlength="50"
              :rules="[
                (val) => (val && val.length > 0) || 'Nome é obrigatório',
                isNameBiggerThan50,
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="form.name = ''" class="cursor-pointer" />
              </template>
            </q-input>
            <q-input
              bottom-slots
              v-model="form.email"
              label="Email"
              type="email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Email é obrigatório',
                isValidEmail,
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="form.email = ''" class="cursor-pointer" />
              </template>
            </q-input>
            <q-input
              bottom-slots
              v-model="form.comment"
              label="Comentários"
              type="textarea"

            >
              <template v-slot:prepend>
                <q-icon name="comment" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="form.password = ''" class="cursor-pointer" />
              </template>

            </q-input>
            <q-btn
              label="Enviar"
              color="primary"
              class="full-width"
              type="submit"
            ></q-btn>
            <q-btn
              label="Voltar"
              color="primary"
              class="full-width"
              flat
              :to="{ name: 'login' }"
            ></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-form>



  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import {useRouter} from "vue-router";
import useAuthUser from "src/composables/UserAuthUser";

export default defineComponent({
  name: "ContactPage",

  setup() {
    const router = useRouter();
    const { registerContact } = useAuthUser();
    const form = ref({
      name: "",
      email: "",
      comment: "",
    });

    const handlerSave = async () => {
      try {
        await registerContact(form.value);
        router.replace({
          name: "comment-confirmation",
          query: { email: form.value.email, name: form.value.name },
        });
        notifySuccess("Comentários enviados com sucesso! 😁");
      } catch (error) {
        notifyError(error.message);
      }
    };

    return { form };
  }
});
</script>
