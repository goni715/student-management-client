import { ReactNode } from "react";

type TProps = {
    children: ReactNode
}

const DashboardLayout = ({children}: TProps) => {
    return (
        <>
           dashobord
            {children}
        </>
    );
};

export default DashboardLayout;