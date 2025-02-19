import { useState } from 'react';

export default function GeneralSettings() {
  const [allowDuplicateBookings, setAllowDuplicateBookings] = useState(false);
  const [companyId] = useState('test1234'); // Simuliran ID podjetja
  const [minRescheduleHours, setMinRescheduleHours] = useState(24);
  const [minCancelHours, setMinCancelHours] = useState(24);
  const [limitFutureBookings, setLimitFutureBookings] = useState(false);
  const [futureBookingLimit, setFutureBookingLimit] = useState(5); // Privzeto število terminov

  // Testna povezava, kasneje bo dinamična glede na podjetje
  const bookingFormUrl = `https://test.povezava/${companyId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bookingFormUrl);
    alert("Povezava skopirana!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">⚙️ Nastavitve</h2>

      {/* Privzete nastavitve */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-lg font-bold">Splošno</h3>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={allowDuplicateBookings}
            onChange={() => setAllowDuplicateBookings(!allowDuplicateBookings)}
          />
          <span>Privzeto dovoli podvojene stranke na terminih</span>
        </div>
      </div>

      {/* Povezava do obrazca */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-lg font-bold">Povezava do obrazca</h3>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="text"
            value={bookingFormUrl}
            readOnly
            className="border rounded p-2 w-full"
          />
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Kopiraj
          </button>
        </div>
      </div>

      {/* Nastavitve prenaročanja */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-lg font-bold">Nastavitve prenaročanja</h3>
        <div className="mt-2">
          <label>Minimalno število ur pred prenaročanjem</label>
          <input
            type="number"
            value={minRescheduleHours}
            onChange={(e) => setMinRescheduleHours(Number(e.target.value))}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mt-2">
          <label>Minimalno število ur pred odpovedjo</label>
          <input
            type="number"
            value={minCancelHours}
            onChange={(e) => setMinCancelHours(Number(e.target.value))}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mt-2 flex items-center gap-2">
          <input
            type="checkbox"
            checked={limitFutureBookings}
            onChange={() => setLimitFutureBookings(!limitFutureBookings)}
          />
          <span>Omeji koliko terminov vnaprej lahko ima stranka rezerviranih</span>
        </div>
        {limitFutureBookings && (
          <div className="mt-2">
            <label>Največje število rezervacij naenkrat</label>
            <input
              type="number"
              value={futureBookingLimit}
              onChange={(e) => setFutureBookingLimit(Number(e.target.value))}
              className="border rounded p-2 w-full"
            />
          </div>
        )}
      </div>

      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg">
        Shrani
      </button>
    </div>
  );
}
