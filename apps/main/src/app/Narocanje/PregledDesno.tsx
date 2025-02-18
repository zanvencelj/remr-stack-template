const PregledDesno = ({ bookingData, step }: any) => {
  return (
    <div className="w-1/3 p-6 bg-gray-50 shadow-lg rounded-lg">
      {/* Napredek korakov */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Pregled termina</h3>
        <div className="flex flex-col mt-2">
          <StepIndicator step={step} currentStep={1} text="IZBERITE LOKACIJO" data={bookingData.location?.name} />
          <StepIndicator step={step} currentStep={2} text="IZBERITE STORITEV" data={bookingData.services.map(s => s.name).join(', ')} />
          <StepIndicator step={step} currentStep={3} text="IZBERITE DATUM" data={bookingData.date} />
          <StepIndicator step={step} currentStep={4} text="IZBERITE URO" data={bookingData.time} />
          <StepIndicator step={step} currentStep={5} text="PODATKI STRANKE" data={bookingData.customer?.name} />
        </div>
      </div>

      {/* Gumb za nadaljevanje */}
      {step < 5 && (
        <button disabled className="w-full py-3 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed">
          Nadaljujte z izbiro
        </button>
      )}

      {step === 5 && (
        <button className="w-full py-3 bg-green-500 text-white rounded-lg">
          Potrdi naročilo
        </button>
      )}
    </div>
  );
};

// Komponenta za prikaz posameznega koraka
const StepIndicator = ({ step, currentStep, text, data }: any) => (
  <div className={`p-2 ${step >= currentStep ? "text-black font-semibold" : "text-gray-400"}`}>
    <p>{text}</p>
    <p className="text-sm">{data || "Še ni izbrano"}</p>
  </div>
);

export default PregledDesno;
