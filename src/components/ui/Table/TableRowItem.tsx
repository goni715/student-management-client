import { ITeacher } from "@/types/teacher.type";
import Image from "next/image";

const TableRowItem = ({ item }: {item:ITeacher}) => {
    return (
        <>
            <tr>
                <td>
                    <Image src={item.photo} alt="pic" width={40} height={40}/>
                </td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
            </tr>
        </>
    );
};

export default TableRowItem;