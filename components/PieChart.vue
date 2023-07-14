<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
    class="h-[100%] w-[100%]"
  />
</template>

<script>
import { Pie } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "PieChart",
  components: {
    Pie,
  },
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 350,
    },
    height: {
      type: Number,
      default: 350,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    // plugins: {
    //   type: Array,
    //   default: () => [],
    // },
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    chartData() {
      return {
        labels: this.data?.labels,
        datasets: [
          {
            data: this.data?.datas,
            backgroundColor: [
              "rgba(118, 169, 250, 0.85)",
              "rgba(249, 128, 128, 0.85)",
              "rgba(229, 231, 235, 0.85)",
            ],
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: "top",
            labels: {
              font: {
                size: 16,
              },
            },
          },
        },
      };
    },
  },
};
</script>
