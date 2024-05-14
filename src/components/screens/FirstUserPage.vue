<template>
  <div class="two-column">
    <div class="column">
      <div>
        <div class="row">
          <InputCard></InputCard>
        </div>
        <div class="row">
          <router-link to="/calculation-page">
            <SubmitButton
              type="Submit"
              color="positive"
              :label="label || defaultLabel"
              disabled="false"
              text-color="dark"
            />
          </router-link>
        </div>
      </div>
    </div>
    <div class="column" style="width: 100%">
      <div class="row" style="margin-bottom: 2rem">
        <OutputCard></OutputCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputCard from "../cards/inputCard.vue";
import OutputCard from "../cards/outputCard.vue";
import SubmitButton from "../executeButton.vue";
import { defineProps } from "vue";

const props = defineProps({
  label: String,
  defaultLabel: {
    type: String,
    default: "EXECUTE",
  },
});
</script>
