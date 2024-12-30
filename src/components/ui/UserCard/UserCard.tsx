import Image from "next/image";

type TProps = {
    type: string;
}

const UserCard = ({ type }: TProps) => {
    return (
        <>
            <div className="flex-1 min-w-[130px] p-4 odd:bg-lamaPurple even:bg-lamaYellow rounded-2xl">
                <div className="flex items-center justify-between">
                    <span className="bg-white text-[10px] px-2 py-1 text-green-600 rounded-full">
                      2024/25
                    </span>
                    <Image src="/more.png" alt="more" width={20} height={20} />
                </div>
                <h1 className="text-2xl font-semibold my-4">13000</h1>
                <h2 className="capitalize text-sm font-medium text-gray-500">
                    {type}
                </h2>
            </div>
        </>
    );
};

export default UserCard;