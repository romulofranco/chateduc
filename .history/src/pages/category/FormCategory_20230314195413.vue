<template>
  <q-page padding>
    <q-form class="row" @submit.prevent="handleSubmit">
      <q-card class="shadow-2 col-12">
        <q-card-section>
          <p class="col-12 text-h5 text-left">Adicionar categoria</p>
          <q-separator color="primary" />
        </q-card-section>

        <q-card-section>
          <q-input label="Nome" v-model="form.name"
            :rules="[val => (val && val.length > 0) || 'Nome da categoria é obrigatório']" />
        </q-card-section>

        <q-space />
        <q-card-actions align="right">
          <q-btn label="Salvar" color="primary" outlined type="submit" />
          <q-btn label="Cancelar" color="primary" flat :to="{ name: 'category' }" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageFormCategory',
  setup () {
    const table = 'category'
    const router = useRouter()
    const { post } = useApi()
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      name: ''
    })

    const handleSubmit = async () => {
      try {
        await post(table, form.value)
        notifySuccess("Categoria inserida com sucesso")

        router.push({ name: 'category' })

      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      handleSubmit,
      form
    }
  }
})

</script>


