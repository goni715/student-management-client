import { ITeacher } from "@/types/teacher.type";
import Image from "next/image";
import Link from "next/link";

const TableRowItem = ({ item }: {item:ITeacher}) => {
    return (
        <>
            <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
                <td className="flex items-center gap-4 p-4">
                    <Image 
                       src={item.photo}
                       alt="pic"
                       width={40}
                       height={40}
                       className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item?.name}</h3>
                        <p className="text-xs text-gray-500">{item?.email}</p>
                    </div>
                </td>
                <td className="hidden md:table-cell">{item?.teacherId}</td>
                <td className="hidden md:table-cell">{item?.subjects.join(',')}</td>
                <td className="hidden md:table-cell">{item?.classes.join(',')}</td>
                <td className="hidden md:table-cell">{item?.phone}</td>
                <td className="hidden md:table-cell">{item?.address}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link href={`/list/teachers/${item?.id}`}>
                          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                             <Image src="/view.png" alt="view" width={16} height={16} />
                          </button>
                        </Link>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default TableRowItem;