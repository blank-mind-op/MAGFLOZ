const revenu = document.getElementById("revenu-tab");
revenu.addEventListener("click", function() {
  const getTrafficChannelsChartOptions = () => {
    let trafficChannelsChartColors = {}

      trafficChannelsChartColors = {
        strokeColor: '#ffffff'
      }

    return {
      series: [100],
      labels: ['Aucun revenu'],
      colors: ['#d5d5d5d5'],
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
        text: "AUCUN REVENUS",
      },
    };
  }

  if (document.getElementById('revenu-chart')) {
    const chart = new ApexCharts(document.getElementById('revenu-chart'), getTrafficChannelsChartOptions());
    chart.render();
  }
});