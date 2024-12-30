"use client"
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
const data = [
    {
      name: 'Total',
      count: 1200,
      fill: 'white',
    },
    {
      name: 'Boys',
      count: 700,
      fill: "#C3EBFA",
    },
    {
      name: 'Girls',
      count: 500,
      fill: "#FAE27C",
    },
  ];
  


const CountChart = () => {
    return (
      <>
        <div className="bg-white w-full h-full p-4 rounded-xl">
          {/* title */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Students</h1>
            <Image src="/moreDark.png" alt="more_dark" width={20} height={20} />
          </div>
          {/* chart */}
          <div className="w-full h-[75%] relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="100%"
                barSize={32}
                data={data}
              >
                <RadialBar background dataKey="count" />
              </RadialBarChart>
            </ResponsiveContainer>
            <Image
              src="/maleFemale.png"
              alt=""
              width={50}
              height={50}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          {/* Bottom */}
          <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-1">
              <div className="w-5 h-5 bg-lamaSky rounded-full" />
              <h1 className="font-bold">1,234</h1>
              <h2 className="text-xs text-gray-300">Boys (55%)</h2>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-5 h-5 bg-lamaYellow rounded-full" />
              <h1 className="font-bold">1,234</h1>
              <h2 className="text-xs text-gray-300">Girls (55%)</h2>
            </div>
          </div>
        </div>
      </>
    );
};

export default CountChart;