
  document.addEventListener("DOMContentLoaded", function() {
    const getTrafficChannelsChartOptions = () => {
      let trafficChannelsChartColors = {}

        trafficChannelsChartColors = {
          strokeColor: '#ffffff'
        }

      return {
        series: [75, 5, 20],
        labels: ['Maison', 'Café', 'Santé'],
        colors: ['#16BDCA', '#FDBA8C', '#1A56DB'],
        chart: {
          type: 'donut',
          height: 400,
          fontFamily: 'Inter, sans-serif',
          toolbar: {
            show: false
          },
        },
        responsive: [{
          breakpoint: 430,
          options: {
            chart: {
              height: 300
            }
          }
        }],
        stroke: {
          colors: [trafficChannelsChartColors.strokeColor]
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.9
            }
          }
        },
        tooltip: {
          shared: true,
          followCursor: false,
          fillSeriesColor: false,
          inverseOrder: true,
          style: {
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif'
          },
          x: {
            show: true,
            formatter: function (_, { seriesIndex, w }) {
              const label = w.config.labels[seriesIndex];
              return label
            }
          },
          y: {
            formatter: function (value) {
              return value + '%';
            }
          }
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        title: {
          text: "Total dépenses : 2000 MAD",
        },
      };
    }

    if (document.getElementById('depense-chart')) {
      const chart = new ApexCharts(document.getElementById('depense-chart'), getTrafficChannelsChartOptions());
      chart.render();
    }
  });