<template>
  <div class="two-column">
    <div class="column">
      <div class="row">
        <InputCard
          @input1Emit="input1Emit"
          @input2Emit="input2Emit"
        ></InputCard>
      </div>
      <br />
      <div class="row">
        <OutputCard
          :resultMultiplication="multiplication"
          :resultAddition="addition"
        ></OutputCard>
      </div>
    </div>
    <div class="column">
      <router-link
        to="/calculation-page"
        style="height: 100%; text-decoration: none"
      >
        <div class="row" style="height: 100%">
          <SubmitButton
            type="Submit"
            color="positive"
            :label="label || defaultLabel"
            text-color="dark"
            @click="calculationsExecutor"
          />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import InputCard from "../cards/inputCard.vue";
import OutputCard from "../cards/outputCard.vue";
import SubmitButton from "../executeButton.vue";
import { defineProps, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
import { useUsersStore } from "../../stores/UsersStore.js";

const usersStore = useUsersStore();
const props = defineProps({
  label: String,
  defaultLabel: {
    type: String,
    default: "EXECUTE",
  },
});
const inputValue1 = ref(0);
const inputValue2 = ref(0);
const addition = ref(0);
const multiplication = ref(0);
const input1Emit = (value) => {
  inputValue1.value = value;
};

const input2Emit = (value) => {
  inputValue2.value = value;
};

watch(addition, (newValue, oldValue) => {});
watch(multiplication, (newValue, oldValue) => {});
const calculationsExecutor = () => {
  setTimeout(waitBlurAnimationEffect, 200);
};
const waitBlurAnimationEffect = () => {
  const currentPageName = route.name;
  if (currentPageName !== "Selection") {
    addition.value = Number(inputValue2.value) + Number(inputValue1.value);
    multiplication.value =
      Number(inputValue2.value) * Number(inputValue1.value);

    usersStore.updateMdoneAdditions(addition.value);
    usersStore.updateMultiplications(multiplication.value);
  }
};
</script>
