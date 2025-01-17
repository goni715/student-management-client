import { teachersData } from "@/data/teacher.data";
import { ITeacher } from "@/types/teacher.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TableRowItem from "./TableRowItem";

type TProps = {
    columns: {
        header: string;
        accessor: string;
         className?: string;   
    }[];
    renderRow?: (item: any) => React.ReactNode;
    data?: any[];
}


const Table = ({columns, renderRow, data}: TProps) => {
    const RenderRow = (item: ITeacher) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">
            <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.teacherId}</td>
          <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
          <td className="hidden md:table-cell">{item.classes.join(",")}</td>
          <td className="hidden md:table-cell">{item.phone}</td>
          <td className="hidden md:table-cell">{item.address}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/teachers/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                  <Image src="/view.png" alt="" width={16} height={16} />
                </button>
              </Link>
              {/* {role === "admin" && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                //   <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                // <FormModal table="teacher" type="delete" id={item.id}/>
              )} */}
            </div>
          </td>
        </tr>
      );

      console.log(RenderRow)

      
    return (
        <>
            <table className="w-full mt-4 bg-red-200">
                <thead>
                    <tr className="text-left text-gray-500 text-sm">
                        {columns?.map((item, i)=> (
                            <th key={i.toString()} className={item.className}> {item.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {teachersData?.map((item,i)=> (
                      <TableRowItem key={i.toString()} item={item}/>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;