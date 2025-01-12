import React from "react";

type TProps = {
    columns: {
        header: string;
        accessor: string;
         className?: string;   
    }[];
    renderRow: (item: any) => React.ReactNode;
    data: any[];
}


const Table = ({columns, renderRow, data}: TProps) => {
    return (
        <>
            <table>
                <thead>

                </thead>
            </table>
        </>
    );
};

export default Table;