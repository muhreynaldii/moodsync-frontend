<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js';
  
  export default {
    data() {
      return {
        chart: null,
      };
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.chartCanvas.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
            datasets: [
              {
                label: 'Dataset 1',
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
                borderColor: 'rgba(220, 220, 220, 1)',
                data: [65, 59, 90, 81, 56],
              },
              {
                label: 'Dataset 2',
                backgroundColor: 'rgba(151, 187, 205, 0.5)',
                borderColor: 'rgba(151, 187, 205, 1)',
                data: [28, 48, 40, 19, 96],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
          },
        });
      },
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.destroy();
      }
    },
  };
  </script>
  