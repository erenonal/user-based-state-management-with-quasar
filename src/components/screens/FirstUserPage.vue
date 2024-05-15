<template>
  <div class="two-column">
    <div class="column" style="">
      <div class="row">
        <InputCard
          @input1Emit="input1Emit"
          @input2Emit="input2Emit"
        ></InputCard>
      </div>
      <div class="row">
        <router-link to="/calculation-page">
          <SubmitButton
            type="Submit"
            color="positive"
            :label="label || defaultLabel"
            text-color="dark"
            @click="calculationsExecutor"
          />
        </router-link>
      </div>
    </div>
    <div class="column" style="">
      <div class="row" style="margin-bottom: 2rem">
        <OutputCard
          :resultMultiplication="multiplication"
          :resultAddition="addition"
        ></OutputCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import InputCard from "../cards/inputCard.vue";
import OutputCard from "../cards/outputCard.vue";
import SubmitButton from "../executeButton.vue";
import { defineProps, watch, ref, reactive } from "vue";
import { useUsersStore } from "../../stores/UsersStore.js";
import { useRoute } from "vue-router";

const route = useRoute();
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
