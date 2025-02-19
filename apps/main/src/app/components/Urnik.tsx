import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

const employeesData = [
  { id: 1, name: 'Valentina Amrozic', location: 'Črnomelj' },
  { id: 2, name: 'Janez Novak', location: 'Ljubljana' },
];

export default function Schedule() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [schedules, setSchedules] = useState({});

  const defaultWorkHours = {
    Monday: { enabled: true, from: '08:00', to: '20:00', breaks: [] },
    Tuesday: { enabled: true, from: '08:00', to: '20:00', breaks: [] },
    Wednesday: { enabled: true, from: '08:00', to: '20:00', breaks: [] },
    Thursday: { enabled: true, from: '08:00', to: '20:00', breaks: [] },
    Friday: { enabled: true, from: '08:00', to: '20:00', breaks: [] },
    Saturday: { enabled: false, from: '', to: '', breaks: [] },
    Sunday: { enabled: false, from: '', to: '', breaks: [] },
  };

  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
    if (!schedules[employee.id]) {
      setSchedules((prev) => ({
        ...prev,
        [employee.id]: { workHours: { ...defaultWorkHours }, blockedDates: [] },
      }));
    }
  };

  const updateSchedule = () => {
    alert(`Urnik za ${selectedEmployee.name} je bil posodobljen!`);
  };

  const addBreak = (day) => {
    setSchedules((prev) => ({
      ...prev,
      [selectedEmployee.id]: {
        ...prev[selectedEmployee.id],
        workHours: {
          ...prev[selectedEmployee.id].workHours,
          [day]: {
            ...prev[selectedEmployee.id].workHours[day],
            breaks: [...prev[selectedEmployee.id].workHours[day].breaks, { from: '', to: '' }],
          },
        },
      },
    }));
  };

  const updateBreak = (day, index, field, value) => {
    setSchedules((prev) => {
      const updatedBreaks = prev[selectedEmployee.id].workHours[day].breaks.map((b, i) =>
        i === index ? { ...b, [field]: value } : b
      );
      return {
        ...prev,
        [selectedEmployee.id]: {
          ...prev[selectedEmployee.id],
          workHours: {
            ...prev[selectedEmployee.id].workHours,
            [day]: { ...prev[selectedEmployee.id].workHours[day], breaks: updatedBreaks },
          },
        },
      };
    });
  };

  const removeBreak = (day, index) => {
    setSchedules((prev) => {
      const updatedBreaks = prev[selectedEmployee.id].workHours[day].breaks.filter((_, i) => i !== index);
      return {
        ...prev,
        [selectedEmployee.id]: {
          ...prev[selectedEmployee.id],
          workHours: {
            ...prev[selectedEmployee.id].workHours,
            [day]: { ...prev[selectedEmployee.id].workHours[day], breaks: updatedBreaks },
          },
        },
      };
    });
  };

  const addBlockedDate = (date) => {
    setSchedules((prev) => ({
      ...prev,
      [selectedEmployee.id]: {
        ...prev[selectedEmployee.id],
        blockedDates: [...prev[selectedEmployee.id].blockedDates, date],
      },
    }));
  };

  const removeBlockedDate = (date) => {
    setSchedules((prev) => ({
      ...prev,
      [selectedEmployee.id]: {
        ...prev[selectedEmployee.id],
        blockedDates: prev[selectedEmployee.id].blockedDates.filter((d) => d !== date),
      },
    }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">📅 Urniki zaposlenih</h2>

      <div className="grid grid-cols-2 gap-6 my-6">
        {employees.map((employee) => (
          <div
            key={employee.id}
            onClick={() => selectEmployee(employee)}
            className={`p-4 border rounded-lg cursor-pointer ${selectedEmployee?.id === employee.id ? 'bg-green-200' : 'bg-white'}`}
          >
            <h3 className="font-bold">{employee.name}</h3>
            <p className="text-gray-500">{employee.location}</p>
          </div>
        ))}
      </div>

      {selectedEmployee && schedules[selectedEmployee.id] && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Urejanje urnika: {selectedEmployee.name}</h3>

          <div className="mt-4">
            {Object.entries(schedules[selectedEmployee.id].workHours).map(([day, data]) => (
              <div key={day} className="border-b py-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold">{day}</span>
                  <input
                    type="checkbox"
                    checked={data.enabled}
                    onChange={(e) =>
                      setSchedules((prev) => ({
                        ...prev,
                        [selectedEmployee.id]: {
                          ...prev[selectedEmployee.id],
                          workHours: {
                            ...prev[selectedEmployee.id].workHours,
                            [day]: { ...data, enabled: e.target.checked },
                          },
                        },
                      }))
                    }
                  />
                </div>
                {data.enabled && (
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="time"
                      value={data.from}
                      onChange={(e) =>
                        setSchedules((prev) => ({
                          ...prev,
                          [selectedEmployee.id]: {
                            ...prev[selectedEmployee.id],
                            workHours: {
                              ...prev[selectedEmployee.id].workHours,
                              [day]: { ...data, from: e.target.value },
                            },
                          },
                        }))
                      }
                      className="border rounded p-1"
                    />
                    -
                    <input
                      type="time"
                      value={data.to}
                      onChange={(e) =>
                        setSchedules((prev) => ({
                          ...prev,
                          [selectedEmployee.id]: {
                            ...prev[selectedEmployee.id],
                            workHours: {
                              ...prev[selectedEmployee.id].workHours,
                              [day]: { ...data, to: e.target.value },
                            },
                          },
                        }))
                      }
                      className="border rounded p-1"
                    />
                  </div>
                )}

                {data.enabled && (
                  <>
                    <h4 className="mt-2">Pavze:</h4>
                    {data.breaks.map((b, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="time"
                          value={b.from}
                          onChange={(e) => updateBreak(day, index, 'from', e.target.value)}
                          className="border rounded p-1"
                        />
                        -
                        <input
                          type="time"
                          value={b.to}
                          onChange={(e) => updateBreak(day, index, 'to', e.target.value)}
                          className="border rounded p-1"
                        />
                        <button onClick={() => removeBreak(day, index)} className="text-red-500">❌</button>
                      </div>
                    ))}
                    <button onClick={() => addBreak(day)} className="text-blue-500 mt-1">➕ Dodaj pavzo</button>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold">Blokirani dnevi</h3>
            <input type="date" id="blocked-date" className="border rounded p-1" />
            <button onClick={() => addBlockedDate(document.getElementById('blocked-date').value)} className="bg-red-500 text-white px-3 py-1 rounded-lg">
              Blokiraj dan
            </button>
            <ul className="mt-2">
              {schedules[selectedEmployee.id].blockedDates.map((date, index) => (
                <li key={index} className="flex justify-between border-b py-1">
                  <span>{date}</span>
                  <button onClick={() => removeBlockedDate(date)} className="text-red-500">🗑️</button>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={updateSchedule} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
            Shrani urnik
          </button>
        </div>
      )}
    </div>
  );
}
