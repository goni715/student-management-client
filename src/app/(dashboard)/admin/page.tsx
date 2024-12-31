import Announcements from "@/components/ui/Announcements/Announcements";
import EventCalendar from "@/components/ui/Calendar/EventCalendar";
import AttendenceChart from "@/components/ui/Chart/AttendenceChart";
import CountChart from "@/components/ui/Chart/CountChart";
import FinanceChart from "@/components/ui/Chart/FinanceChart";
import UserCard from "@/components/ui/UserCard/UserCard";

const AdminPage = () => {
    return (
      <>
        <div className="flex flex-col md:flex-row gap-4 p-4">
          {/* Left */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* user cards */}
            <div className="flex gap-4 flex-wrap justify-between">
              <UserCard type="student" />
              <UserCard type="teacher" />
              <UserCard type="parent" />
              <UserCard type="staff" />
            </div>

            {/* Middle Chart */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Count Chart */}
              <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart />
              </div>
              {/* Attendence Chart */}
              <div className="w-full lg:w-2/3 h-[450px]">
                <AttendenceChart />
              </div>
            </div>

            {/* Bottom Chart */}
            <div className="w-full h-[500px]">
              <FinanceChart />
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalendar/>
            <Announcements/>
          </div>
        </div>
      </>
    );
};

export default AdminPage;