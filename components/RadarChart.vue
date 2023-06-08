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
            labels: ['Neutral', 'Happy', 'Sad', 'Angry', 'Fearful','Disgusted','Surprised'],
            datasets: [
              {
                label: 'Emosi Mahasiswa',
                backgroundColor: 'rgba(164, 202, 254, 50%)',
                borderColor: 'rgba(28, 100, 242, 70%)',
                data: [65, 59, 90, 81, 56, 44, 22],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              display: false // Menghapus legend pada Bar Chart
            },
            scale: {
              pointLabels: {
              fontSize: 16 // Ukuran font pada label titik pada Radar Chart
              },
              angleLines: {
              display: false
              },
              r: {
                ticks:{
                  suggestedMin: 0 ,// Memulai skala dari 0 pada Radar Chart
                  beginAtZero: true // Memulai skala dari 0 pada Radar Chart
                }
              },
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
  