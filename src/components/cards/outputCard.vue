<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 output-title">Results</div>
      <q-form @submit.prevent="submitForm">
        <q-input
          outlined
          v-model="input1"
          label="Addition"
          dense
          class="q-mb-md"
        />
        <q-input outlined v-model="input2" label="Multiplication" dense />
      </q-form>
    </q-card-section>
    <SubmitButton
      type="Submit"
      color="positive"
      label="SHOW CHART"
      disabled="false"
      text-color="dark"
      v-if="user == 'user4'"
    />
  </q-card>
</template>
<script setup>
import { ref } from "vue";
import SubmitButton from "../executeButton.vue";

import { useUsersStore } from "../../stores/UsersStore.js";
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
