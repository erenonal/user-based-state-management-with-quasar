<template>
  <div class="two-column">
    <div class="column">
      <div>
        <div class="row"><InputCard></InputCard></div>
        <div class="row">
          <OutputCard></OutputCard>
        </div>
        <div class="row">
          <SubmitButton
            type="Submit"
            color="positive"
            :label="label || defaultLabel"
            disabled="false"
            text-color="dark"
          />
        </div>
      </div>
    </div>
    <div class="column">
      <div class="row">Content 4</div>
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
