<template>
  <q-card class="q-card">
    <q-card-section>
      <div class="text-h6 input-title">Inputs</div>
      <q-form @submit.prevent="submitForm">
        <q-input outlined v-model="input1" label="x" dense class="q-mb-md" @blur="handleTextEditFinish1" />
        <q-input outlined v-model="input2" label="y" dense @blur="handleTextEditFinish2" />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emits = defineEmits(['input1Emit', 'input2Emit']);

const input1 = ref("");
const input2 = ref("");

const handleTextEditFinish1 = () => {
  emits('input1Emit', input1.value);
  console.log("Text edit finished in input1:", input1.value);
};

const handleTextEditFinish2 = () => {
  emits('input2Emit', input2.value);
  console.log("Text edit finished in input2:", input2.value);
};

const submitForm = () => {
  console.log(
    "Form submitted with input1:",
    input1.value,
    "and input2:",
    input2.value
  );
};
</script>
