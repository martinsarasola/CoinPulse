"use client";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Enero", ventas: 4000 },
  { name: "Febrero", ventas: 3000 },
  { name: "Marzo", ventas: 2000 },
  { name: "Abril", ventas: 2780 },
];

export const Chart = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="ventas" stroke="#8884d8" />
    </LineChart>
  );
};
