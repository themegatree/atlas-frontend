const buildLabelArray = (data) => {
  const labelsArr = data.map(obj => obj.type );
  return labelsArr;
}

const buildNumberArray = (data) => {
  const numbersArr = data.map(obj => parseInt(obj.number) );
  return numbersArr;
}

const buildData = (data) => {

  const dataObj = {
    labels: buildLabelArray(data),
    datasets: [
      {
        label: '# of Votes',
        data: buildNumberArray(data),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',  
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return dataObj;
}

export default buildData;