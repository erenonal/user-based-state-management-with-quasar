<template>
  <q-card class="q-card">
    <q-card-section>
      <div class="text-h6 output-title">Results</div>
      <div class="output-column">
        <span class="output-text-label">Addition:</span>
        <span class="output-text-number">{{ resultAddition }}</span>
      </div>
      <div class="output-column">
        <span class="output-text-label">Multiplication:</span>
        <span class="output-text-number">{{ resultMultiplication }}</span>
      </div>
    </q-card-section>
   
  </q-card>
</template>

<script setup>
import { ref } from "vue";

import { useUsersStore } from "../../stores/UsersStore.js";
const props = defineProps({
  buttonText: {
    type: String,
    default: "GO",
  },
  actionType: {
    type: String,
    default: "GO",
  },
  resultAddition: {
    type: Number,
    default: 0,
  },
  resultMultiplication: {
    type: Number,
    default: 0,
  },
});
const usersStore = useUsersStore();
const user = usersStore.userType;

const userLayoutClass = () => {
  if (user === "user2") {
    return "two-column";
  } else {
    return "one-column";
  }
};
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

<style scoped></style>
