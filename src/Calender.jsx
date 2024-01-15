import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CgCalendarDates } from "react-icons/cg";

const Calendar = ({ onClose }) => {
  const [calendarDate, setCalendarDate] = useState(new Date());

  const handleDateChange = (date) => {
    // Handle the date change logic here
    setCalendarDate(date);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex gap-3">
          <div className="w-full h-56 flex items-center justify-center">
            Calendar details for {calendarDate.toISOString().split("T")[0]}
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <p>
            <CgCalendarDates />
          </p>
          <button
            onClick={() => handleDateChange(new Date())} // Change to your logic
            className="border border-gray-400 px-2 rounded-md"
          >
            Change Date
          </button>
          <DatePicker
            selected={calendarDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            // Additional props based on your DatePicker configuration
          />
        </div>
        <button
          onClick={onClose}
          className="mt-2 bg-red-500 text-white p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Calendar;
