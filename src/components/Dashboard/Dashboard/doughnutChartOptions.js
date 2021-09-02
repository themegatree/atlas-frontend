const doughnutChartOptions = (titleName) => { 
    return {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: titleName,
      },
    },
  };
}

module.exports = doughnutChartOptions 