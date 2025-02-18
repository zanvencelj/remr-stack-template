import { useState } from 'react';


// Mock podatki – kasneje jih zamenjamo s podatki iz baze
const MOCK_CLIENTS = [
  { id: 1, firstName: 'Tin', lastName: 'Šuklje', email: 'tin.suklje@gmail.com' },
  { id: 2, firstName: 'Jasna', lastName: 'Šimic', email: 'jasna.suklje@gmail.com' },
  { id: 3, firstName: 'Sara', lastName: 'Šuklje', email: 'sara.suklje@gmail.com' },
  { id: 4, firstName: 'John', lastName: 'Doe', email: 'john.doe@gmail.com' },
];

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('lastVisit');

  // Filtriranje po iskalniku
  const filteredClients = MOCK_CLIENTS.filter((client) =>
    `${client.firstName} ${client.lastName} ${client.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header in gumb za dodajanje stranke */}
      <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">📋 Pregled strank</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">

          Dodaj stranko
        </button>
      </div>

      {/* Iskalnik in sortiranje */}
      <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Iskanje"
            className="border border-gray-300 rounded-lg p-2 w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          </svg>

        </div>

        <select
          className="border border-gray-300 rounded-lg p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="lastVisit">Datumu zadnjega obiska</option>
          <option value="name">Imenu</option>
        </select>
      </div>

      {/* Tabela s strankami */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <table className="w-full border-collapse">
          <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Ime</th>
            <th className="p-3">Priimek</th>
            <th className="p-3">Elektronski naslov</th>
          </tr>
          </thead>
          <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id} className="border-t">
              <td className="p-3">{client.firstName}</td>
              <td className="p-3">{client.lastName}</td>
              <td className="p-3">{client.email}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      {/* Paginacija */}
      <div className="flex justify-between items-center mt-4">
        <button className="p-2 border rounded-lg bg-gray-100">←</button>
        <span className="text-gray-600">1</span>
        <button className="p-2 border rounded-lg bg-gray-100">→</button>
      </div>
    </div>
  );
}
