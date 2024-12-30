import UserCard from "@/components/ui/UserCard/UserCard";

const AdminPage = () => {
    return (
        <>
           <div className="flex flex-col md:flex-row gap-4 p-4">
            {/* Left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8 bg-cyan-500">
              {/* user cards */}
               <div>
                 <UserCard/>
                 <UserCard/>
                 <UserCard/>
                 <UserCard/>
               </div>
               <div>
                 left2
               </div>
            </div>
            {/* Right */}
            <div>Right</div>
           </div>
        </>
    );
};

export default AdminPage;