import { useState } from 'react';
import IzbiraLokacije from './IzbiraLokacije';
import IzbiraStoritev from './IzbiraStoritev';
import IzbiraDatuma from './IzbiraDatuma';
import IzbiraUre from './IzbiraUre';
import PodatkiStranke from './PodatkiStranke';
import PregledNarocila from './PregledNarocila';
import PregledDesno from './PregledDesno';

const Narocanje = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    location: null,
    services: [],
    date: null,
    time: null,
    customer: null
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="flex justify-center items-start min-h-screen p-10">
      {/* Levi del (izbira korakov) */}
      <div className="w-2/3 p-6 bg-white shadow-lg rounded-lg">
        {step === 1 && <IzbiraLokacije setBookingData={setBookingData} nextStep={nextStep} />}
        {step === 2 && <IzbiraStoritev setBookingData={setBookingData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <IzbiraDatuma setBookingData={setBookingData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <IzbiraUre setBookingData={setBookingData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <PodatkiStranke setBookingData={setBookingData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 6 && <PregledNarocila bookingData={bookingData} prevStep={prevStep} />}
      </div>

      {/* Desni del (pregled naročila) */}
      <PregledDesno bookingData={bookingData} step={step} />
    </div>
  );
};

export default Narocanje;
