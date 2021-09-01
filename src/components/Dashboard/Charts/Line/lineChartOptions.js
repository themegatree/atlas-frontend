const lineChartOptions = (titleName) => { 
    return {
    aspectRatio: 0.9,
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: 'Files Uploaded'
        },
        min: 0,
      },
    },
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
  
  module.exports = lineChartOptions 
