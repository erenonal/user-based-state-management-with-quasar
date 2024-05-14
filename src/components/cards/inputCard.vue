<template>
  <div>
    <q-card>
      <q-card-section>
        <div class="text-h6 input-title">Inputs</div>
        <q-form @submit.prevent="submitForm">
          <q-input outlined v-model="input1" label="x" dense class="q-mb-md" />
          <q-input outlined v-model="input2" label="y" dense />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
import { ref } from "vue";

const input1 = ref("");
const input2 = ref("");

const submitForm = () => {
  console.log(
    "Form submitted with input1:",
    input1.value,
    "and input2:",
    input2.value
  );
};
</script>
