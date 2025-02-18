const IzbiraLokacije = ({ setBookingData, nextStep }: any) => {
  const locations = [
    { name: 'Črnomelj', address: 'Kolodvorska cesta 39, Črnomelj' },
    { name: 'Novo Mesto', address: 'Foersterjeva ulica 4, Novo mesto' },
    { name: 'Ljubljana', address: 'Celovška cesta 40b, Ljubljana' },
    { name: 'Kočevje', address: 'Trg zbora odposlancev 80, Kočevje' }
  ];

  const selectLocation = (location: any) => {
    setBookingData((prev: any) => ({ ...prev, location }));
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Izberite lokacijo</h2>
      {locations.map((loc) => (
        <button
          key={loc.name}
          onClick={() => selectLocation(loc)}
          className="block w-full p-4 border rounded-lg mb-2 bg-white hover:bg-gray-200"
        >
          <strong>{loc.name}</strong> - {loc.address}
        </button>
      ))}
    </div>
  );
};

export default IzbiraLokacije;
