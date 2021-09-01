import createDateLabels from './createDateLabels'

const buildLineData = (fileUploadsArray) => {
    return {
      labels: createDateLabels(),
      datasets: [
        {
          label: 'Module Challenge Uploads',
          data: fileUploadsArray.find(upload => upload.type === "Module Challenges").uploads,
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
 
          ],
          borderColor: [
          'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
        {
            label: 'Self Assessment Uploads',
            data: fileUploadsArray.find(upload => upload.type === "Self Assessment").uploads,
            backgroundColor: [
            'rgba(255, 159, 64, 0.2)'

            ],
            borderColor: [
            'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        },
      ],
    };
  }
  
  export default buildLineData;