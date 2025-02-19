import { SetStateAction, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { sl } from 'date-fns/locale';

const locales = { sl: sl };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const events = [
  {
    title: 'Rezervacija - Stranka 1',
    start: new Date(2025, 1, 18, 10, 0),
    end: new Date(2025, 1, 18, 11, 0),
  },
  {
    title: 'Rezervacija - Stranka 2',
    start: new Date(2025, 1, 19, 14, 0),
    end: new Date(2025, 1, 19, 15, 0),
  },
];

export default function CalendarView() {
  const [view, setView] = useState('month');

  // @ts-ignore
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Zavihek z naslovom in gumbi */}
      <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold flex items-center">
          📅 <span className="ml-2">Koledar rezervacij</span>
        </h2>

        {/* Gumbi za preklop pogleda */}
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 text-sm rounded-lg ${
              view === 'month' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setView('month')}
          >
            Mesec
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-lg ${
              view === 'week' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setView('week')}
          >
            Teden
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-lg ${
              view === 'day' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setView('day')}
          >
            Dan
          </button>
        </div>
      </div>

      {/* Koledar */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          views={['month', 'week', 'day']}
          view={view}
          onView={(newView) => setView(newView)}
          className="rbc-calendar"
        />
      </div>
    </div>
  );
}
