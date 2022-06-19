import React from "react";
import {
  PieChart,
  Pie,
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
    { name: "World Average", Carbon: 4.4 },
  ];

  return (
   
      <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="Carbon"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#475db0"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 100, right: 100 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Carbon" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    
  );
};

export default Charts;