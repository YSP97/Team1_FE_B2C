import { memo, useState, useRef, useEffect } from 'react';
import CustomCalendar from './CustomCalendar';
import SVGIcon from './SVGIcon';

type SelectedDateProps = {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
};

function CalendarInput({ selectedDate, setSelectedDate }: SelectedDateProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  /** 날짜 포맷 함수 (YYYY-MM-DD) */
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const handleClick = () => setShowCalendar((prev) => !prev);

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center gap-[13px] text-[20px]">
        <SVGIcon name="icon-calendar" className="text-gray-200" />
        <div className="text-white">
          {selectedDate ? formatDate(selectedDate) : formatDate(new Date())}
        </div>
      </button>

      {showCalendar && (
        <div
          className="absolute top-1 left-0 z-10 shadow-md rounded-lg w-full"
          ref={calendarRef}>
          <CustomCalendar
            selectedDate={selectedDate}
            setSelectedDate={handleSelectedDate}
          />
        </div>
      )}
    </div>
  );
}

export default memo(CalendarInput);
