<template>
  <q-card class="text-center"   >
    <q-img :src="data.icon" style="height: 350px"/>
    <p class="text-h6 text-bold text-weight-medium q-mt-md">{{ data.title }}</p>
    <p class="text-body2" style="padding: 15px 15px 15px 15px">
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
