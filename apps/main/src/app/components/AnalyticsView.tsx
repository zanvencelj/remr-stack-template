import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

// Registracija Chart.js komponent
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsView() {
  const [selectedPeriod, setSelectedPeriod] = useState('7D');
  const [selectedLocation, setSelectedLocation] = useState('Črnomelj');

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const data = {
    labels: ['Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob', 'Ned'],
    datasets: [
      {
        label: 'Prihodki',
        data: [120, 200, 150, 300, 250, 100, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">📊 Analitika</h2>

      {/* Filtriranje */}
      <div className="flex items-center gap-4 my-4">
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5 text-gray-600" />
          <select
            className="border border-gray-300 rounded-lg p-2"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="Črnomelj">Črnomelj</option>
            <option value="Novo Mesto">Novo Mesto</option>
            <option value="Ljubljana">Ljubljana</option>
            <option value="Kočevje">Kočevje</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-gray-600" />
          <button
            className={`p-2 border rounded-lg ${selectedPeriod === '1D' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePeriodChange('1D')}
          >
            1D
          </button>
          <button
            className={`p-2 border rounded-lg ${selectedPeriod === '7D' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePeriodChange('7D')}
          >
            7D
          </button>
          <button
            className={`p-2 border rounded-lg ${selectedPeriod === '1M' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePeriodChange('1M')}
          >
            1M
          </button>
          <button
            className={`p-2 border rounded-lg ${selectedPeriod === '1L' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePeriodChange('1L')}
          >
            1L
          </button>
        </div>
      </div>

      {/* Grafikon */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Bar data={data} />
      </div>
    </div>
  );
}
