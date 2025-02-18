const IzbiraDatuma = ({ setBookingData, nextStep, prevStep }: any) => {
  const dates = ['5. Marec', '6. Marec', '7. Marec'];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Izberite datum</h2>
      {dates.map((date) => (
        <button
          key={date}
          onClick={() => { setBookingData((prev: any) => ({ ...prev, date })); nextStep(); }}
          className="block w-full p-4 border rounded-lg mb-2 bg-white hover:bg-gray-200"
        >
          {date}
        </button>
      ))}
    </div>
  );
};

export default IzbiraDatuma;
