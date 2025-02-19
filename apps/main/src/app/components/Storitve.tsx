import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Nohti' },
    { id: 2, name: 'Obrvi in Trepalnice' },
    { id: 3, name: 'Paketi' },
  ]);

  const [services, setServices] = useState([
    { id: 1, name: 'Manikura', duration: '60 min', price: '25,00 €', categoryId: 1 },
    { id: 2, name: 'Pedikura', duration: '45 min', price: '20,00 €', categoryId: 1 },
  ]);

  const [modal, setModal] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', duration: '', price: '', categoryId: '' });

  const openModal = (type, item = null) => {
    setEditItem(item);
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
    setEditItem(null);
  };

  const handleSaveCategory = () => {
    if (editItem) {
      setCategories(categories.map(cat => (cat.id === editItem.id ? editItem : cat)));
    } else {
      setCategories([...categories, { id: Date.now(), name: newItem.name }]);
    }
    closeModal();
  };

  const handleSaveService = () => {
    if (editItem) {
      setServices(services.map(serv => (serv.id === editItem.id ? editItem : serv)));
    } else {
      setServices([...services, { id: Date.now(), ...newItem }]);
    }
    closeModal();
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">📋 Storitve</h2>

      <div className="flex gap-4 my-4">
        <button onClick={() => openModal('addService')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusCircleIcon className="w-5 h-5" /> Dodaj storitev
        </button>
        <button onClick={() => openModal('addCategory')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusCircleIcon className="w-5 h-5" /> Dodaj kategorijo
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Kategorije */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Kategorije</h3>
          <ul>
            {categories.map(category => (
              <li key={category.id} className="flex justify-between p-2 border-b">
                <span>{category.name}</span>
                <div className="flex gap-2">
                  <button onClick={() => openModal('editCategory', category)} className="text-blue-500">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDeleteCategory(category.id)} className="text-red-500">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Storitve */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Storitve</h3>
          <ul>
            {services.map(service => (
              <li key={service.id} className="flex justify-between p-2 border-b">
                <span>{service.name} - {service.duration} - {service.price}</span>
                <div className="flex gap-2">
                  <button onClick={() => openModal('editService', service)} className="text-blue-500">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDeleteService(service.id)} className="text-red-500">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modalno okno */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {modal === 'editCategory' ? 'Uredi kategorijo' : modal === 'addCategory' ? 'Dodaj kategorijo' : modal === 'editService' ? 'Uredi storitev' : 'Dodaj storitev'}
            </h2>
            <input
              type="text"
              placeholder="Ime"
              className="border p-2 w-full mb-2"
              value={editItem?.name || newItem.name}
              onChange={(e) => editItem ? setEditItem({ ...editItem, name: e.target.value }) : setNewItem({ ...newItem, name: e.target.value })}
            />
            {modal.includes('Service') && (
              <>
                <input
                  type="text"
                  placeholder="Trajanje"
                  className="border p-2 w-full mb-2"
                  value={editItem?.duration || newItem.duration}
                  onChange={(e) => editItem ? setEditItem({ ...editItem, duration: e.target.value }) : setNewItem({ ...newItem, duration: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Cena"
                  className="border p-2 w-full mb-2"
                  value={editItem?.price || newItem.price}
                  onChange={(e) => editItem ? setEditItem({ ...editItem, price: e.target.value }) : setNewItem({ ...newItem, price: e.target.value })}
                />
                <select
                  className="border p-2 w-full mb-2"
                  value={editItem?.categoryId || newItem.categoryId}
                  onChange={(e) => editItem ? setEditItem({ ...editItem, categoryId: e.target.value }) : setNewItem({ ...newItem, categoryId: e.target.value })}
                >
                  <option value="">Izberi kategorijo</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </>
            )}
            <div className="flex justify-end gap-2">
              <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Prekliči</button>
              <button onClick={modal.includes('Category') ? handleSaveCategory : handleSaveService} className="bg-green-500 text-white px-4 py-2 rounded-lg">Shrani</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
