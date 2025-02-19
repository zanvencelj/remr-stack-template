import { useState } from "react";

const storitve = [
  { id: 1, name: "Frizura", duration: "45 min", price: "24,00 €" },
  { id: 2, name: "Brada", duration: "30 min", price: "15,00 €" },
  { id: 3, name: "Komplet (Frizura & Brada)", duration: "75 min", price: "39,00 €" },
];

const IzbiraStoritev = ({ setBookingData, nextStep, prevStep }: any) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service: any) => {
    setSelectedServices((prev): any =>
      prev.some((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  const handleNext = () => {
    setBookingData((prev :any) => ({ ...prev, services: selectedServices }));
    nextStep();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Izberite storitev</h2>
      <div className="space-y-3">
        {storitve.map((storitev) => {
          const isSelected = selectedServices.some((s) => s.id === storitev.id);
          return (
            <div
              key={storitev.id}
              className={`p-4 border rounded-lg cursor-pointer transition ${
                isSelected ? "border-green-500 bg-green-100" : "border-gray-300"
              }`}
              onClick={() => toggleService(storitev)}
            >
              <div className="flex justify-between">
                <span className="font-semibold">{storitev.name}</span>
                <span>{storitev.price}</span>
              </div>
              <p className="text-sm text-gray-500">{storitev.duration}</p>
            </div>
          );
        })}
      </div>

      {/* Navigacijski gumbi */}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg">
          Nazaj
        </button>
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded-lg ${
            selectedServices.length > 0 ? "bg-green-500 text-white" : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={selectedServices.length === 0}
        >
          Naprej
        </button>
      </div>
    </div>
  );
};

export default IzbiraStoritev;
