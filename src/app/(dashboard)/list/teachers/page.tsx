import TableSearch from "@/components/ui/Table/TableSearch";
import Image from "next/image";

const TeacherListPage = () => {
    return (
        <>
          <div className="bg-white p-4 flex-1 rounded-md m-4 mt-0">
             {/* Top */}
             <div>
               <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
               <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                 <TableSearch/>
                 <div className="flex items-center gap-4">
                    <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
                      <Image src="/filter.png" alt="filter" width={14} height={14}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
                      <Image src="/sort.png" alt="sort" width={14} height={14}/>
                    </button>
                 </div>
               </div>
             </div>
          </div>     
        </>
    );
};

export default TeacherListPage;