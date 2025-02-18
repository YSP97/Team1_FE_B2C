import { memo, useState } from 'react';
import SVGIcon from './SVGIcon';

type SelectedDateProps = {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
};

function CustomCalendar({ selectedDate, setSelectedDate }: SelectedDateProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);
  const startDayOfCurrentMonth = new Date(firstDayOfCurrentMonth);
  startDayOfCurrentMonth.setDate(1 - firstDayOfCurrentMonth.getDay());

  const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0);
  const endDayOfCurrentMonth = new Date(lastDayOfCurrentMonth);
  endDayOfCurrentMonth.setDate(
    lastDayOfCurrentMonth.getDate() + (6 - lastDayOfCurrentMonth.getDay())
  );

  const groupDatesByWeek = (startDate: Date, endDate: Date) => {
    const weeks: Date[][] = [];
    let currentWeek: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      currentWeek.push(new Date(currentDate));

      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const weeks = groupDatesByWeek(startDayOfCurrentMonth, endDayOfCurrentMonth);

  const changeMonth = (nextMonth: number) => {
    setCurrentDate(new Date(currentYear, currentMonth + nextMonth, 1));
  };

  const isSameMonth = (date: Date, baseDate: Date) => {
    return (
      date.getFullYear() === baseDate.getFullYear() &&
      date.getMonth() === baseDate.getMonth()
    );
  };

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    return date1 && date2
      ? date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate()
      : false;
  };

  const formatDateHeader = (date: Date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  };

  const isBeforeToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="p-6 bg-bg-secondary shadow-lg rounded-lg w-full max-w-md text-white">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth(-1)} className="px-4 py-2 rounded">
          <SVGIcon name="icon-arrow-left" size={20} />
        </button>
        <h2 className="text-lg font-semibold">
          {formatDateHeader(currentDate)}
        </h2>
        <button onClick={() => changeMonth(1)} className="px-4 py-2 rounded">
          <SVGIcon name="icon-arrow-right" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center font-semibold">
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mt-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="contents">
            {week.map((day, dayIndex) => (
              <button
                key={dayIndex}
                className={`py-2 rounded-full w-full  ${
                  isSameDay(day, selectedDate)
                    ? 'bg-primary text-bg-primary font-bold'
                    : 'hover:bg-gray-300'
                }
                ${isSameMonth(day, currentDate)? 'text-white': 'text-gray-100'}
                ${isBeforeToday(day) ? 'hover:bg-transparent text-gray-300' : ''}`}
                disabled={isBeforeToday(day) ? true : false}
                onClick={() => setSelectedDate(day)}>
                {day.getDate()}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(CustomCalendar);
