<template>
  <div class="row">
    <q-card flat>
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h4 text-bold q-mt-lg q-mb-lg">{{ title }}</div>
          <div class="text-h6 text-grey-9">
            {{ text }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            :src="img"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
  <a id="about"></a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Sobre o projeto"
    },
    text: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"
    },
    img: {
      type: String
    }
  }
};
</script>

<style></style>
