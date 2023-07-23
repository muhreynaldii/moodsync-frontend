<template>
      <Radar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"

        class="w-[100%] h-[100%]"
      />
</template>

<script>
import { Radar } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
);

export default {
  name: "RadarChart",
  components: {
    Radar,
  },
  props: {
    chartId: {
      type: String,
      default: "radar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
    labels: {
      type: Array,
      default: () => [],
    },
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
            label: "Emosi Pelajar",
            data: this.data?.datas,
            backgroundColor: "rgba(164, 202, 254, 0.7)",
            borderColor: "rgba(89, 142, 245, 0.7)",
            pointBackgroundColor: "rgba(122, 170, 250)",
            pointBorderColor: "rgba(89, 142, 245, 1)",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            pointLabels: {
              font: {
                size: 16, // Ubah ukuran font di sini
              },
            },
            angleLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1,
            },
          },
        },
      };
    },
  },
};
</script>
