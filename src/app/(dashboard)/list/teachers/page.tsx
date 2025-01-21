import Pagination from "@/components/ui/Pagination/Pagination";
import Table from "@/components/ui/Table/Table";
import TableSearch from "@/components/ui/Table/TableSearch";
import Image from "next/image";


const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];


const TeacherListPage = () => {
    return (
        <>
          <div className="bg-white p-4 flex-1 rounded-md m-4 mt-0">
             {/* Top */}
             <div className="flex items-center justify-between">
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
             {/* List */}
             <Table columns={columns} />
             {/* Pagination */}
             <Pagination/>
          </div>     
        </>
    );
};

export default TeacherListPage;