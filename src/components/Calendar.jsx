import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function StyledGoogleCalendar({ events = [] }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  const fcEvents = events
    .filter(e => e.start || e.date)
    .map(e => ({
      id: e.id,
      title: e.title,
      start: e.start ?? e.date,
      end: e.end ?? undefined,
    }));

  return (
    <div className="flex flex-col h-full w-full bg-gray-900 rounded-xl shadow-xl text-white p-2 text-sm">
      <h2 className="text-lg font-bold mb-2 text-center">Calendar</h2>

      <div className="flex-1 overflow-hidden">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="100%"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "",
          }}
          selectable={true}
          dateClick={handleDateClick}
          navLinks={true}
          events={fcEvents}
          dayCellClassNames={(arg) => {
            let classes =
              "transition-colors duration-200 rounded-lg cursor-pointer text-xs p-1";
            const today = new Date();
            const day = arg.date;

            if (
              day.getDate() === today.getDate() &&
              day.getMonth() === today.getMonth() &&
              day.getFullYear() === today.getFullYear()
            ) {
              classes += " bg-red-600 text-white font-semibold";
            }

            if (selectedDate === day.toISOString().split("T")[0]) {
              classes += " ring-2 ring-red-400 bg-red-500 font-bold";
            }

            classes += " hover:bg-red-700";

            return classes;
          }}
        />
      </div>
  
    </div>
  );
<<<<<<< HEAD
}

=======
}
>>>>>>> 91af6e2d07bcb7555cee5f67bfa73091a1872cfe
