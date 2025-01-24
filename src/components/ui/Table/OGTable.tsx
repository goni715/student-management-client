"use client";

import { TStudent } from "@/types/student.type";

type TProps = {
    columns: {
        header:string;
        accessor: string;
        className?: string;
    }[];
    renderRow: (item: any) => React.ReactNode;
    data: TStudent[];
}

const OGTable = ({columns, renderRow, data}: TProps) => {
    return (
        <div>
            This is Reusable Table
        </div>
    );
};

export default OGTable;