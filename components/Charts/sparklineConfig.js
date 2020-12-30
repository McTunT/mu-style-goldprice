export const sparklineConfig = ({ categories }) => {
  return {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },

    stroke: {
      curve: 'smooth',
      width: 2.3,
    },

    xaxis: {
      categories: categories,
    },

    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
}
