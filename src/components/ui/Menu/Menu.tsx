import { menuItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    const role = "teacher";

    return (
        <>
           <div className="mt-4 text-sm h-[85vh] overflow-y-scroll">
              {
                menuItems?.map((elm, index)=>(
                    <div key={index} className="flex flex-col gap-2">
                        <span className="hidden lg:block text-gray-400 font-light my-4">{elm.title}</span>
                        {elm?.items?.map((item,i)=>{
                            if(item?.visible.includes(role)){
                                return (
                                    <Link
                                      key={i} 
                                      href={item.href}
                                      className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 hover:bg-lamaSkyLight"
                                    >
                                        <Image src={item.icon} alt="menu_icon" width={20} height={20} />
                                        <span className="hidden lg:block">{item.label}</span>
                                    </Link>
                                )
                            }
                         })                           
                        }
                    </div>
                ))
              }
           </div>
        </>
    );
};

export default Menu;