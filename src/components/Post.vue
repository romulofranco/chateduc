<template>
  <q-card class="text-center"   >
    <q-img :src="data.icon" style="max-height: 450px"/>
    <p class="text-h5 text-bold text-weight-medium q-mt-md">{{ data.title }}</p>
    <p class="text-body1" style="padding: 15px 15px 15px 15px">
      {{ data.text }}
    </p>
  </q-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>
