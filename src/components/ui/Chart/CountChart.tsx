import Image from "next/image";

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
                <div className="w-full h-[75%] bg-slate-200">
                    chart
                </div>
                {/* Bottom */}
                <div className="flex justify-center gap-16">
                    <div className="flex flex-col gap-1">
                        <div className="w-5 h-5 bg-lamaSky rounded-full"/>
                        <h1 className="font-bold">1,234</h1>
                        <h2 className="text-xs text-gray-300">Boys (55%)</h2>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-5 h-5 bg-lamaYellow rounded-full"/>
                        <h1 className="font-bold">1,234</h1>
                        <h2 className="text-xs text-gray-300">Girls (55%)</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountChart;