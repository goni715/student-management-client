"use client"
import FormModal from "@/components/ui/Modal/FormModal";
import Pagination from "@/components/ui/Pagination/Pagination";
import OGTable from "@/components/ui/Table/OGTable";
import TableSearch from "@/components/ui/Table/TableSearch";
import { subjectsData } from "@/data/subject.data";
import { TSubject } from "@/types/subject.type";
import Image from "next/image";

const columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
      header: "Teachers",
      accessor: "teachers",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];


const SubjectListPage = () => {

    const renderRow = (item: TSubject) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.name}</td>
          <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
          <td>
            <div className="flex items-center gap-2">
              {/* {role === "admin" && (
                <>
                  <FormModal table="subject" type="update" data={item} />
                  <FormModal table="subject" type="delete" id={item.id} />
                </>
              )} */}
            </div>
          </td>
        </tr>
      );


    return (
        <>
           <div className="bg-white p-4 flex-1 rounded-md m-4 mt-0">
             {/* Top */}
             <div className="flex items-center justify-between">
               <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
               <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                 <TableSearch/>
                 <div className="flex items-center gap-4">
                    <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
                      <Image src="/filter.png" alt="filter" width={14} height={14}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
                      <Image src="/sort.png" alt="sort" width={14} height={14}/>
                    </button>
                    <FormModal table="teacher" type="create"/>
                 </div>
               </div>
             </div>
             {/* List */}
             <OGTable columns={columns} renderRow={renderRow} data={subjectsData} />
             {/* Pagination */}
             <Pagination/>
          </div> 
        </>
    );
};

export default SubjectListPage;