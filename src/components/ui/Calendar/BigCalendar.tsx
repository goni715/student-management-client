import { Calendar } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    return (
      <>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </>
    );
};

export default BigCalendar;