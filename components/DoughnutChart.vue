<template>
  <div>
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";

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
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
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
              "rgba(84, 214, 51, 0.85)",
              "rgba(214, 51, 51, 0.85)",
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
        // plugins: {
        //   datalabels: {
        //     display: true,
        //     formatter: (value) => (value ? `${value}%` : ''),
        //     color: '#fff',
        //   },
        //   tooltip: {
        //     enabled: false,
        //   },
        // },
      };
    },
  },
};
</script>
