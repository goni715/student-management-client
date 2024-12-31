import Menu from "@/components/ui/Menu/Menu";
import Navbar from "@/components/ui/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type TProps = {
    children: ReactNode
}

const DashboardLayout = ({children}: TProps) => {
    return (
        <>
            <div className="flex">
                {/* Left */}
                <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                    <Link href="/" className="flex justify-center lg:justify-start items-center gap-2">
                      <Image src="/logo.png" alt="Logo" width={32} height={32}/>
                      <span className="hidden lg:block font-bold">SchooLama</span>
                    </Link>
                    <Menu/>
                </div>
                {/* Right */}
                <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] flex flex-col">
                    <Navbar/>
                    {/* content */}
                    <div className="h-[80vh] overflow-y-scroll"> 
                        {children}
                    </div> 
                </div>
            </div>
            {/* {children} */}
        </>
    );
};

export default DashboardLayout;