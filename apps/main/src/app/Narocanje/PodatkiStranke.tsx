import { useState } from 'react';

const PodatkiStranke = ({ setBookingData, nextStep, prevStep }: any) => {
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setBookingData((prev: any) => ({ ...prev, customer: formData }));
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Vnesite podatke</h2>
      <input
        type="text"
        name="name"
        placeholder="Ime"
        value={formData.name}
        onChange={handleChange}
        className="block w-full p-2 border rounded-lg mb-2"
      />
      <input
        type="text"
        name="surname"
        placeholder="Priimek"
        value={formData.surname}
        onChange={handleChange}
        className="block w-full p-2 border rounded-lg mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        className="block w-full p-2 border rounded-lg mb-2"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefon"
        value={formData.phone}
        onChange={handleChange}
        className="block w-full p-2 border rounded-lg mb-2"
      />
      <button onClick={prevStep} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded-lg">Nazaj</button>
      <button onClick={handleSubmit} className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg">Naprej</button>
    </div>
  );
};

export default PodatkiStranke;
