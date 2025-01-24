"use client";

import { TStudent } from "@/types/student.type";

type TProps = {
    columns: {
        header:string;
        accessor: string;
        className?: string;
    }[];
    renderRow: (item: unknown) => React.ReactNode;
    data: TStudent[];
}

const OGTable = ({columns, renderRow, data}: TProps) => {
    return (
      <>
        <table className="w-full mt-4">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              {columns.map((col) => (
                <th key={col.accessor} className={col.className}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{data.map((item) => renderRow(item))}</tbody>
        </table>
      </>
    );
};

export default OGTable;