import React from 'react';
import { Bar } from 'react-chartjs-2';

const Graphresult = ({ scores, results }) => {
  
  const calculateResults = () => {
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    return { totalScore, scores };
  };

  const { totalScore } = calculateResults();

  // Data for the bar graphs
  const data = {
    labels: Object.keys(scores),
    datasets: [
      {
        label: 'Scores',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: Object.values(scores),
      },
    ],
  };

  
  return (
    <div>
      <h2>Exam completed! Display results here</h2>
      {/* Display individual scores */}
      <p>PAG UNAWA SA NAPAKINGAN: {scores.BEGINNER}/20</p>
      <p>PAG UNAWA SA BINASA: {scores.EASY}/20</p>
      <p>PAGSUSURI SA BOKABULARYO: {scores.INTERMEDIATE}/20</p>
      <p>WIKA AT GRAMATIKA: {scores.CHALLENGING}/20</p>
      
      {/* Total Score */}
      <p>Total Score: {totalScore}</p>
      
      {/* Bar Graph */}
      <div style={{ marginTop: '20px' }}>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    max: 20,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Graphresult;
