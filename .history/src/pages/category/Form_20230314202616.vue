<template>
  <q-page padding>
    <q-form padding @submit.prevent="handleSubmit">
      <q-card class="shadow-2 col-12">
        <q-card-section>
          <p class="col-12 text-h5 text-left">Adicionar categoria</p>
          <q-separator color="primary" />
        </q-card-section>

        <q-card-section>
          <q-input label="Nome" v-model="form.name" color="primary" @focus="(input) => input.target.select()"
            :rules="[val => (val && val.length > 0) || 'Nome da categoria é obrigatório']" />
        </q-card-section>

        <q-space />
        <q-card-actions align="right">
          <q-btn :label="isUpdate ? 'Atualizar' : 'Salvar'" color="primary" outlined type="submit" />
          <q-btn label="Cancelar" color="primary" flat :to="{ name: 'category' }" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>
<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageFormCategory',
  setup () {
    const table = 'category'
    const router = useRouter()
    const route = useRoute()
    const { post, getById, update } = useApi()
    const { notifyError, notifySuccess } = useNotify()
    let category = {}

    const form = ref({
      name: ''
    })

    const isUpdate = computed(() => route.params.id)

    onMounted(() => {
      if (isUpdate.value) {
        handleGetCategory(isUpdate.value)
      }
    })

    const handleSubmit = async () => {
      try {

        if (isUpdate.value) {
          await update(table, form.value)
          notifySuccess("Categoria atualizada com sucesso")
        } else {
          await post(table, form.value)
          notifySuccess("Categoria inserida com sucesso")
        }

        router.push({ name: 'category' })
      } catch (error) {
        notifyError(error.message)
      }
    }

    const handleGetCategory = async (id) => {
      try {
        category = await getById(table, id)
        form.value = category
      } catch (error) {
        notifyError(error.message)
      }

    }


    return {
      handleSubmit,
      form,
      isUpdate
    }
  }
})

</script>


