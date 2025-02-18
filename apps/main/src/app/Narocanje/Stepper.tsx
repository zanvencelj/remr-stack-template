const steps = [
  { id: 1, label: "Lokacija", status: "error" }, // Napaka (rdeča)
  { id: 2, label: "Storitev", status: "success" }, // Uspešno (zelena)
  { id: 3, label: "Termin", status: "active" }, // Trenutni korak (modra)
  { id: 4, label: "Podatki", status: "inactive" }, // Še ni izpolnjen (siv)
];

const Stepper = ({ currentStep }: any) => {
  return (
    <div className="flex flex-col items-start">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center mb-4">
          {/* Krog z ikono */}
          <div
            className={`w-8 h-8 flex items-center justify-center border-2 rounded-full font-bold text-white ${
              step.status === "error"
                ? "border-red-500 text-red-500"
                : step.status === "success"
                  ? "border-green-500 text-green-500"
                  : step.status === "active"
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-400 text-gray-400"
            }`}
          >
            {step.status === "error" ? "!" : step.id}
          </div>
          {/* Črta med koraki */}
          {index < steps.length - 1 && (
            <div className="w-1 h-10 bg-gray-300 mx-2"></div>
          )}
          <span className="ml-3 font-medium">{step.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
