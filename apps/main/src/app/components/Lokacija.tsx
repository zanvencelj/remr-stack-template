import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

const MOCK_LOCATIONS = [
  { id: 1, name: 'Črnomelj', address: 'Ulica Lojzeta Fabjana 3, 8340 Črnomelj' },
  { id: 2, name: 'Novo Mesto', address: 'Foersterjeva ulica 4, Novo Mesto' },
  { id: 3, name: 'Ljubljana', address: 'Celovška cesta 40b, Ljubljana' },
  { id: 4, name: 'Kočevje', address: 'Trg zbora odposlancev 80, Kočevje' },
];

export default function Lokacija() {
  const [locations, setLocations] = useState(MOCK_LOCATIONS);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = (location) => {
    setSelectedLocation(location);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (location) => {
    setSelectedLocation(location);
    setIsDeleteModalOpen(true);
  };

  const closeModals = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedLocation(null);
  };

  const handleDelete = () => {
    setLocations(locations.filter((loc) => loc.id !== selectedLocation.id));
    closeModals();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📍 Lokacije</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={() => setIsEditModalOpen(true)}
        >
          <PlusIcon className="w-5 h-5" />
          Dodaj lokacijo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {locations.map((location) => (
          <div key={location.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{location.name}</h3>
              <p className="text-gray-600">{location.address}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg"
                onClick={() => openEditModal(location)}
              >
                <PencilIcon className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
                onClick={() => openDeleteModal(location)}
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal za urejanje */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-md">
            <h3 className="text-xl font-bold mb-4">{selectedLocation ? 'Uredi lokacijo' : 'Dodaj lokacijo'}</h3>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full mb-2"
              placeholder="Ime lokacije"
              defaultValue={selectedLocation?.name || ''}
            />
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full mb-2"
              placeholder="Naslov"
              defaultValue={selectedLocation?.address || ''}
            />
            <div className="flex justify-end gap-2">
              <button onClick={closeModals} className="p-2 bg-gray-300 rounded-lg">Prekliči</button>
              <button className="p-2 bg-green-500 text-white rounded-lg">Shrani</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal za brisanje */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Ali želite izbrisati lokacijo {selectedLocation?.name}?</h3>
            <div className="flex justify-end gap-2">
              <button onClick={closeModals} className="p-2 bg-gray-300 rounded-lg">Prekliči</button>
              <button onClick={handleDelete} className="p-2 bg-red-500 text-white rounded-lg">Izbriši</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
