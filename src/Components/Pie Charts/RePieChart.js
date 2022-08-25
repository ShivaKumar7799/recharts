import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 800 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['red', '#00C49F', '#FFBB28', '#FF8042'];

export default function RePieChart() {
  const [showPopUp, setShowPopUp] = useState(false);
  const mouseEnter = () => {
    setShowPopUp(!showPopUp)
  }
  const mouseLeave =() => {
    setShowPopUp(!showPopUp)
  }
    return (
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          
        >
          {data.map((entry, index) => (
            <Cell onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
}