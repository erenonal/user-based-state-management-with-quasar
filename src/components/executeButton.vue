<!-- SubmitButton.vue -->
<template>
  <q-btn
    :type="type"
    :color="color"
    :label="label"
    class="q-mt-md"
    style="width: 100%; margin-bottom: 1rem;"
  />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  type: String,
  color: String,
  label: String,
});
</script>
