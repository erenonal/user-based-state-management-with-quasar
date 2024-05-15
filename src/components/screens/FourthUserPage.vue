<template>
  <div class="one-column">
    <div class="two-column" style="border: none">
      <div class="column">
        <div>
          <div class="row">
            <InputCard
              @input1Emit="input1Emit"
              @input2Emit="input2Emit"
            ></InputCard>
          </div>
          <div class="row" v-if="!isMobile">
            <OutputCard
              :resultMultiplication="multiplication"
              :resultAddition="addition"
            ></OutputCard>
          </div>
          <div class="row">
            <SubmitButton
              type="Submit"
              color="positive"
              label="SHOW CHART"
              text-color="dark"
              @click="calculationsExecutor"
            />
          </div>
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
      <div class="column">
        <div class="row" v-if="isMobile">
          <OutputCard
            :resultMultiplication="multiplication"
            :resultAddition="addition"
          ></OutputCard>
        </div>
        <div
          id="chart"
          ref="chart"
          style="min-width: 26vw"
          v-if="!isMobile"
        ></div>
      </div>
    </div>
    <div id="chart" ref="chart" v-if="isMobile"></div>
  </div>
</template>
<script setup>
import InputCard from "../cards/inputCard.vue";
import OutputCard from "../cards/outputCard.vue";
import SubmitButton from "../executeButton.vue";
import { defineProps, ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

import { useUsersStore } from "../../stores/UsersStore.js";

const usersStore = useUsersStore();
const route = useRoute();
const doneAdditions = usersStore.getdoneAdditions;
const doneMultiplications = usersStore.getdoneMultiplications;

const props = defineProps({
  label: String,
  defaultLabel: {
    type: String,
    default: "EXECUTE",
  },
});
const isMobile = ref(window.innerWidth <= 768);

const updateIsMobile = () => {
  const prevIsMobile = isMobile.value;

  isMobile.value = window.innerWidth <= 768;
  if (prevIsMobile !== isMobile.value) {
    window.location.reload();
  }
  if (!isMobile.value) {
    window.location.reload();
  }
};
watch(
  () => window.innerWidth,
  (newWidth, oldWidth) => {
    if (newWidth !== oldWidth) {
      updateIsMobile();
    }
  }
);

window.addEventListener("resize", updateIsMobile);

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});
const chart = ref(null);
const data = [
  {
    x: doneAdditions,
    y: doneMultiplications,
    type: "scatter",
    mode: "lines",
    marker: { color: "blue" },
  },
];

const layout = {
  title: "Line Chart",
  xaxis: {
    title: "X-axis",
    showgrid: true,
    gridwidth: 1,
    gridcolor: "lightgrey",
    showline: true,
  },
  yaxis: {
    title: "Y-axis",
    showgrid: true,
    gridwidth: 1,
    gridcolor: "lightgrey",
    showline: true,
  },
};
const config = {
  displayModeBar: true,
  modeBarButtonsToAdd: [
    "zoomIn2d",
    "zoomOut2d",
    "pan2d",
    "select2d",
    "lasso2d",
    "zoomInGeo",
    "zoomOutGeo",
    "resetGeo",
    "hoverClosestCartesian",
    "hoverCompareCartesian",
    "zoom3d",
    "pan3d",
    "resetCameraDefault3d",
    "resetCameraLastSave3d",
    "hoverClosest3d",
  ],
  modeBarButtonsToRemove: ["toggleSpikelines", "resetScale2d"],
};
onMounted(() => {
  Plotly.newPlot(chart.value, data, layout, config);
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

    Plotly.newPlot(chart.value, data, layout, config);
  }
};
</script>
