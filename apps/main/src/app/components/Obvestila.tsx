import { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const [newNotification, setNewNotification] = useState({
    type: 'SMS',
    event: 'Pred terminom',
    timeUnit: 'Ur',
    timeValue: '',
    content: '',
    enabled: true // Privzeto obvestilo vklopljeno
  });

  const timeUnits = ['Dni', 'Ur', 'Minut'];

  const eventOptions = [
    'Ob potrditvi',
    'Ob odpovedi',
    'Pred terminom',
    'Po terminu'
  ];

  const dynamicValues = [
    { id: 1, label: "Ime podjetja", placeholder: "{businessName}" },
    { id: 2, label: "Ime stranke", placeholder: "{clientName}" },
    { id: 3, label: "Datum", placeholder: "{date}" },
    { id: 4, label: "Ura termina", placeholder: "{time}" },
    { id: 5, label: "Naslov lokacije", placeholder: "{location}" },
    { id: 6, label: "Storitev", placeholder: "{service}" },
    { id: 7, label: "Povezava za prenaročanje", placeholder: "{rescheduleLink}" }
  ];

  const addNotification = () => {
    if ((newNotification.event === 'Pred terminom' || newNotification.event === 'Po terminu') &&
      (newNotification.timeValue === '' || isNaN(newNotification.timeValue))) {
      alert("Vnesite veljavno število dni/ur/minut.");
      return;
    }

    setNotifications([...notifications, { id: Date.now(), ...newNotification }]);
    setNewNotification({ type: 'SMS', event: 'Pred terminom', timeUnit: 'Ur', timeValue: '', content: '', enabled: true });
  };

  const insertDynamicValue = (placeholder) => {
    setNewNotification((prev) => ({
      ...prev,
      content: prev.content + ' ' + placeholder
    }));
  };

  const toggleNotification = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
    ));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">📢 Obvestila</h2>

      {/* Seznam obvestil */}
      <div className="grid grid-cols-2 gap-6 my-6">
        {notifications.map(notification => (
          <div key={notification.id} className="p-4 border rounded-lg bg-white shadow-md relative">
            {/* Stikalo za vklop/izklop obvestila */}
            <div className="absolute top-2 right-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notification.enabled}
                  onChange={() => toggleNotification(notification.id)}
                  className="hidden"
                />
                <div className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${notification.enabled ? "bg-green-500" : "bg-gray-400"}`}>
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${notification.enabled ? "translate-x-5" : "translate-x-0"}`}></div>
                </div>
              </label>
            </div>

            <span className="font-bold">{notification.type}</span>
            <p className="text-gray-500">{notification.event}</p>
            {['Pred terminom', 'Po terminu'].includes(notification.event) && (
              <p className="text-blue-500">
                Pošiljanje {notification.timeValue} {notification.timeUnit.toLowerCase()}
                {notification.event === 'Pred terminom' ? ' pred' : ' po'} terminom
              </p>
            )}
            <p className="mt-2">{notification.content}</p>
          </div>
        ))}
      </div>

      {/* Dodaj novo obvestilo */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Dodaj obvestilo</h3>

        <div className="mt-4 flex flex-col gap-3">
          {/* Izbira vrste obvestila */}
          <select
            value={newNotification.type}
            onChange={(e) => setNewNotification({ ...newNotification, type: e.target.value })}
            className="border rounded p-2"
          >
            <option value="SMS">SMS</option>
            <option value="EMAIL">Email</option>
          </select>

          {/* Izbira dogodka (kdaj naj se obvestilo pošlje) */}
          <select
            value={newNotification.event}
            onChange={(e) => setNewNotification({ ...newNotification, event: e.target.value })}
            className="border rounded p-2"
          >
            {eventOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          {/* Vnos časa (dni/ure/minute) - prikazan samo pri "Pred terminom" ali "Po terminu" */}
          {['Pred terminom', 'Po terminu'].includes(newNotification.event) && (
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min="1"
                value={newNotification.timeValue}
                onChange={(e) => setNewNotification({ ...newNotification, timeValue: e.target.value })}
                className="border rounded p-2 w-20"
              />
              <select
                value={newNotification.timeUnit}
                onChange={(e) => setNewNotification({ ...newNotification, timeUnit: e.target.value })}
                className="border rounded p-2"
              >
                {timeUnits.map(unit => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
          )}

          {/* Vnos sporočila */}
          <textarea
            value={newNotification.content}
            onChange={(e) => setNewNotification({ ...newNotification, content: e.target.value })}
            placeholder="Vnesite sporočilo..."
            className="border rounded p-2 h-24"
          />

          {/* Dinamične vrednosti za vstavljanje */}
          <div className="flex flex-wrap gap-2 mt-2">
            {dynamicValues.map(value => (
              <button
                key={value.id}
                onClick={() => insertDynamicValue(value.placeholder)}
                className="bg-gray-200 text-sm px-3 py-1 rounded-lg hover:bg-gray-300"
              >
                {value.label}
              </button>
            ))}
          </div>

          {/* Gumb za dodajanje obvestila */}
          <button onClick={addNotification} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
            Dodaj obvestilo
          </button>
        </div>
      </div>
    </div>
  );
}
