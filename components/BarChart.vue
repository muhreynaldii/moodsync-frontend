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
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
              ],
              data: [28, 25, 27, 24],
              borderWidth: 1
            },
          ],
        },
        options: {
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                stepSize: 1, // Langkah antara nilai pada sumbu X
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 5, // Langkah antara nilai pada sumbu Y
              },
            },
          },
          responsive: true,
          maintainAspectRatio: true,
          legend: {
              display: false // Menghapus legend pada Bar Chart
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