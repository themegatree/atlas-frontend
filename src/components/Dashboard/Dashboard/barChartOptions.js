const barChartOptions = (titleName) => { 
  return {
  aspectRatio: 0.9,
  responsive: true,
  scales: {
    y: {
      title: {
        display: true,
        text: 'Average completion %'
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: true,
      text: titleName,
    },
  },
};
}

module.exports = barChartOptions 