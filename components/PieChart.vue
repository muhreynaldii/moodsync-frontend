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
            labels: ['Hadir', 'Tidak Hadir'],
            datasets: [
              {
                data: [3, 1],
                backgroundColor: ['#76A9FA', '#F98080'],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              display: true // opsi legend pada Chart
            },
          },
        });
      },
    },
  };
  </script>
  