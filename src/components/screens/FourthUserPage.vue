<template>
  <div class="one-column">
    <div class="two-column" style="border: none">
      <div class="column">
        <div>
          <div class="row"><InputCard></InputCard></div>
          <div class="row" v-if="!isMobile">
            <OutputCard></OutputCard>
          </div>
          <div class="row">
            <SubmitButton
              type="Submit"
              color="positive"
              label="SHOW CHART"
              text-color="dark"
            />
          </div>
          <router-link to="/calculation-page">
            <SubmitButton
              type="Submit"
              color="positive"
              :label="label || defaultLabel"
              text-color="dark"
            />
          </router-link>
        </div>
      </div>
      <div class="column">
        <div class="row" v-if="isMobile">
          <OutputCard class="row"></OutputCard>
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

const props = defineProps({
  label: String,
  defaultLabel: {
    type: String,
    default: "EXECUTE",
  },
});
const isMobile = ref(window.innerWidth <= 768);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
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

onMounted(() => {
  const data = [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16],
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
      showline: true, // Show x-axis line
    },
    yaxis: {
      title: "Y-axis",
      showgrid: true,
      gridwidth: 1,
      gridcolor: "lightgrey",
      showline: true, // Show x-axis line
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

  Plotly.newPlot(chart.value, data, layout, config);
});
</script>
