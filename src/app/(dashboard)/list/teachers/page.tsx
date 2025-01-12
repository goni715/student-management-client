import TableSearch from "@/components/ui/Table/TableSearch";

const TeacherListPage = () => {
    return (
        <>
          <div className="bg-white p-4 flex-1 rounded-md m-4 mt-0">
             {/* Top */}
             <div>
               <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
               <div>
                 <TableSearch/>

               </div>
             </div>
          </div>     
        </>
    );
};

export default TeacherListPage;