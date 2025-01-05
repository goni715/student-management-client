import Announcements from "@/components/ui/Announcements/Announcements";
import BigCalendar from "@/components/ui/Calendar/BigCalendar";
import EventCalendar from "@/components/ui/Calendar/EventCalendar";

const StudentPage = () => {
    return (
        <>
            <div className="flex flex-col gap-4 xl:flex-row p-4">
                {/* Left */}
                <div className="w-full xl:w-2/3">
                    <div className="h-full bg-white p-4 rounded-md">
                        <h1 className="text-xl font-semibold">Schedule (4A) </h1>
                        <BigCalendar/>
                    </div>
                </div>
                {/* Right */}
                <div className="w-full bg-pink-300 xl:w-1/3 flex flex-col gap-8">
                    <EventCalendar/>
                    <Announcements/>
                </div>
            </div>
        </>
    );
};

export default StudentPage;