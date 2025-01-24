import Image from "next/image";

type TProps = {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type: "create" | "update" | "delete";
  data?: any;
  id?: number;
};

const FormModal = ({ table, type, data, id }: TProps) => {

    const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";


  return (
    <>
       <button className={`flex items-center justify-center rounded-full ${bgColor}`}>
         <Image src={`/${type}.png`} alt="" width={16} height={16}/>
       </button>
    </>
  );
};

export default FormModal;
