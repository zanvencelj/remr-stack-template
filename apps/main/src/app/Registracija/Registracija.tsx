import { useState } from 'react';
import axios from 'axios';


const Registracija = () => {
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState({
    imePodjetja: "",
    maticnaSt: "",
    davcnaSt: "",
    naslov: "",
    mesto: "",
    postnaSt: "",
    drzava: "",
    telefonSt: "",
    spletnaStran: "",
  });

  const [user, setUser] = useState({
    ime: "",
    priimek: "",
    email: "",
    telefonSt: "",
    geslo: "",
    PodjetjeId: "",
    FunkcijaId: "",
  });

  const handleCompanySubmit = async (e: any) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, PodjetjeId: "12345" })); // Simulacija ID podjetja
    setStep(2);
  };

  const handleUserSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/auth/podjetje/register", {
      "imePodjetja": company.imePodjetja,
      "maticnaSt": company.maticnaSt,
      "davcnaSt": company.davcnaSt,
      "naslov": company.naslov,
      "mesto": company.mesto,
      "postnaSt": company.postnaSt,
      "drzava": company.drzava,
      "telefonSt": company.telefonSt,
      "spletnaStran": company.spletnaStran
    });
    await axios.post("http://localhost:8000/api/auth/uporabnik/register", {
      "ime": user.ime,
      "priimek": user.priimek,
      "email": user.email,
      "telefonSt": user.telefonSt,
      "geslo": user.geslo
    });
    alert("Podjetje in uporabnik uspešno registrirana!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        {step === 1 ? (
          <form onSubmit={handleCompanySubmit}>
            <h2 className="text-2xl font-bold mb-4">Registracija podjetja</h2>
            {Object.keys(company).map((key) => (
              <input
                key={key}
                type="text"
                placeholder={key}
                value={company[key]}
                onChange={(e) =>
                  setCompany((prev) => ({ ...prev, [key]: e.target.value }))
                }
                className="w-full p-2 border rounded mb-2"
              />
            ))}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded mt-2"
            >
              Naprej
            </button>
          </form>
        ) : (
          <form onSubmit={handleUserSubmit}>
            <h2 className="text-2xl font-bold mb-4">Registracija uporabnika</h2>
            {Object.keys(user)
              .filter((key) => key !== "PodjetjeId")
              .map((key) => (
                <input
                  key={key}
                  type={key === "geslo" ? "password" : "text"}
                  placeholder={key}
                  value={user[key]}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  className="w-full p-2 border rounded mb-2"
                />
              ))}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded mt-2"
            >
              Registriraj
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registracija;
