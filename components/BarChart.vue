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
          type: 'bar',
          data: {
            labels: ['Pertemuan 1', 'Pertemuan 2', 'Pertemuan 3', 'Pertemuan 4'],
            datasets: [
              {
                label: 'Kehadiran Mahasiswa',
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
                borderColor: 'rgba(220, 220, 220, 1)',
                data: [31 , 15, 27, 24],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales:{
              y:{
                beginAtZero: true
              }
            }
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