const PregledNarocila = ({ bookingData, prevStep }: any) => {
  const handleSubmit = () => {
    console.log('Oddano naročilo:', bookingData);
    alert('Naročilo uspešno oddano!');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pregled naročila</h2>
      <p><strong>Lokacija:</strong> {bookingData.location?.name}</p>
      <p><strong>Storitev:</strong> {bookingData.services.map(s  => s.name).join(', ')}</p>
      <p><strong>Datum:</strong> {bookingData.date}</p>
      <p><strong>Ura:</strong> {bookingData.time}</p>
      <p><strong>Ime in priimek:</strong> {bookingData.customer.name} {bookingData.customer.surname}</p>
      <p><strong>Email:</strong> {bookingData.customer.email}</p>
      <p><strong>Telefon:</strong> {bookingData.customer.phone}</p>

      <button onClick={prevStep} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded-lg">Nazaj</button>
      <button onClick={handleSubmit} className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg">Potrdi naročilo</button>
    </div>
  );
};

export default PregledNarocila;
