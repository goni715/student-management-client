import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between p-4">
                {/* Search Bar */}
                <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                    <Image src="/search.png" alt="search" width={14} height={14}/>
                    <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
                </div>
                {/* Icons & User */}
                <div>
                    user
                </div>
            </div>
        </>
    );
};

export default Navbar;