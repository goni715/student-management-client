"use client";
import Image from "next/image";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
      name: "Mon",
      present: 60,
      absent: 40,
    },
    {
      name: "Tue",
      present: 70,
      absent: 60,
    },
    {
      name: "Wed",
      present: 90,
      absent: 75,
    },
    {
      name: "Thu",
      present: 90,
      absent: 75,
    },
    {
      name: "Fri",
      present: 65,
      absent: 55,
    },
  ];
  

const AttendenceChart = () => {
    return (
      <>
        <div className="bg-white h-full p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Attendence</h1>
            <Image src="/moreDark.png" alt="more_dark" width={20} height={20} />
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#ddd"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tick={{ fill: "#d1d5db" }}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tick={{ fill: "#d1d5db" }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  borderColor: "lightgray",
                }}
              />
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
              />
              <Bar
                dataKey="present"
                fill="#FAE27C"
                legendType="circle"
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="absent"
                fill="#C3EBFA"
                legendType="circle"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
    );
};

export default AttendenceChart;