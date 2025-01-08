"use client"
import { calendarEvents } from "@/data/data";
import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    // const [view, setView] = useState<View>(Views.WORK_WEEK);

    // const handleOnChangeView = (selectedView: View) => {
    //   setView(selectedView);
    // };

    return (
      <>
   <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
      </>
    );
};

export default BigCalendar;