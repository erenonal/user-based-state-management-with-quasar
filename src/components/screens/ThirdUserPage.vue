<template>
  <div class="two-column">
    <div class="column">
      <div class="row"><InputCard></InputCard></div>
      <br />
      <div class="row"><OutputCard></OutputCard></div>
    </div>
    <div class="column">
      <router-link
        to="/calculation-page"
        style="height: 100%; text-decoration: none"
      >
        <div class="row" style="height: 100%;">
          <SubmitButton
            type="Submit"
            color="positive"
            :label="label || defaultLabel"
            text-color="dark"
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
import { defineProps } from "vue";

const props = defineProps({
  label: String,
  defaultLabel: {
    type: String,
    default: "EXECUTE",
  },
});
</script>
