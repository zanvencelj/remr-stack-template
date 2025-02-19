const IzbiraUre = ({ setBookingData, nextStep, prevStep }: any) => {
  const availableTimes = ['09:00', '10:00', '11:30', '13:00', '15:00'];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Izberite uro</h2>
      {availableTimes.map((time) => (
        <button
          key={time}
          onClick={() => { setBookingData((prev: any) => ({ ...prev, time })); nextStep(); }}
          className="block w-full p-4 border rounded-lg mb-2 bg-white hover:bg-gray-200"
        >
          {time}
        </button>
      ))}
      <button onClick={prevStep} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded-lg">Nazaj</button>
    </div>
  );
};

export default IzbiraUre;
