<template>
  <div class="row justify-center items-center  q-pa-md">
    <div class="col-12 col-md-8">
      <q-card flat class="bg-grey-1 q-pa-md">
        <q-card-section>
          <p class="text-h4">Sign up for our Newsletter</p>
          <div class="row">
            <div class="col-12 col-md-6 q-px-sm">
              <q-input outlined v-model="text" label="Name" />
            </div>
            <div class="col-12 col-md-6 q-px-sm">
              <q-input outlined v-model="text" label="Email" />
            </div>
          </div>
        </q-card-section>
        <q-card-section class="text-right">
          <q-space />
          <q-btn color="positive" @click="subscribe">subscribe</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    subscribe() {
      // do something
    }
  }
};
</script>
