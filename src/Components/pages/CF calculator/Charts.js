import React from 'react';
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import './CarbonFootprint'
const Charts = (props) => {
  
  const data = [
    { name: "Uk Average", Carbon: 14.1 },
    { name: "World Average", Carbon: 4.4},
    { name: "Your Total", Carbon: props.finalScore},
  ];
  return (
   
      <div>
        {/* PieChart was no longer used and created margin inside the <div> */}
        <BarChart
          className='charts'
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 30,
            bottom: 10,
          }}
          barSize={20}
        >
          <XAxis
            stroke="white"
            dataKey="name"
            scale="point"
            padding={{ left: 50, right: 50 }}
          />
          <YAxis 
          stroke="white"
          />
          <Tooltip />
          <Legend />
          {/* Color style has been modified (only the color codes) */}
          <CartesianGrid strokeDasharray="0 0" fill="#95afc0"/>
          <Bar dataKey="Carbon" fill="#22a6b3" background={{ fill: "lightgrey" }} />
        </BarChart>
      </div>
    
  );
};

export default Charts;