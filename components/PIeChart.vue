<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js';
  
  export default {
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.chartCanvas.getContext('2d');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Label 1', 'Label 2', 'Label 3'],
            datasets: [
              {
                data: [30, 40, 20],
                backgroundColor: ['red', 'blue', 'green'],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false // Menghapus legend pada Bar Chart
            },
          },
        });
      },
    },
  };
  </script>
  