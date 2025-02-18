import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

export default function Employees() {
  const [employees, setEmployees] = useState([
    { id: 1, role: 'Frizer', name: 'Marko Novak', email: 'marko@example.com', phone: '+386 40 123 456', taxId: '12345678', locations: ['Črnomelj'] },
  ]);

  const [modal, setModal] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({
    role: '', name: '', email: '', phone: '', taxId: '', locations: [],
  });

  const openModal = (type, item = null) => {
    setEditItem(item);
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
    setEditItem(null);
  };

  const handleSaveEmployee = () => {
    if (editItem) {
      setEmployees(employees.map(emp => (emp.id === editItem.id ? editItem : emp)));
    } else {
      setEmployees([...employees, { id: Date.now(), ...newItem }]);
    }
    closeModal();
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">👥 Osebje</h2>

      <div className="flex gap-4 my-4">
        <button onClick={() => openModal('addEmployee')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusCircleIcon className="w-5 h-5" /> Dodaj zaposlenega
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">Seznam zaposlenih</h3>
        <ul>
          {employees.map(employee => (
            <li key={employee.id} className="flex justify-between p-2 border-b">
              <span>{employee.role} - {employee.name} - {employee.email}</span>
              <div className="flex gap-2">
                <button onClick={() => openModal('editEmployee', employee)} className="text-blue-500">
                  <PencilIcon className="w-5 h-5" />
                </button>
                <button onClick={() => handleDeleteEmployee(employee.id)} className="text-red-500">
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modalno okno */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {modal === 'editEmployee' ? 'Uredi zaposlenega' : 'Dodaj zaposlenega'}
            </h2>

            <input
              type="text"
              placeholder="Vloga"
              className="border p-2 w-full mb-2"
              value={editItem?.role || newItem.role}
              onChange={(e) => editItem ? setEditItem({ ...editItem, role: e.target.value }) : setNewItem({ ...newItem, role: e.target.value })}
            />
            <input
              type="text"
              placeholder="Ime"
              className="border p-2 w-full mb-2"
              value={editItem?.name || newItem.name}
              onChange={(e) => editItem ? setEditItem({ ...editItem, name: e.target.value }) : setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Elektronski naslov"
              className="border p-2 w-full mb-2"
              value={editItem?.email || newItem.email}
              onChange={(e) => editItem ? setEditItem({ ...editItem, email: e.target.value }) : setNewItem({ ...newItem, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Telefonska številka"
              className="border p-2 w-full mb-2"
              value={editItem?.phone || newItem.phone}
              onChange={(e) => editItem ? setEditItem({ ...editItem, phone: e.target.value }) : setNewItem({ ...newItem, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Davčna številka"
              className="border p-2 w-full mb-2"
              value={editItem?.taxId || newItem.taxId}
              onChange={(e) => editItem ? setEditItem({ ...editItem, taxId: e.target.value }) : setNewItem({ ...newItem, taxId: e.target.value })}
            />
            <select
              className="border p-2 w-full mb-2"
              value={editItem?.locations[0] || newItem.locations[0]}
              onChange={(e) => editItem ? setEditItem({ ...editItem, locations: [e.target.value] }) : setNewItem({ ...newItem, locations: [e.target.value] })}
            >
              <option value="">Izberi lokacijo</option>
              <option value="Črnomelj">Črnomelj</option>
              <option value="Novo Mesto">Novo Mesto</option>
            </select>

            <div className="flex justify-end gap-2">
              <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Prekliči</button>
              <button onClick={handleSaveEmployee} className="bg-green-500 text-white px-4 py-2 rounded-lg">Shrani</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
