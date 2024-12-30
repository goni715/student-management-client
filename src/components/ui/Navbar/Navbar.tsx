import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between bg-amber-400 p-4">
                {/* Search Bar */}
                <div className="hidden md:flex items-center">
                    <Image src="/" alt="search"/>
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