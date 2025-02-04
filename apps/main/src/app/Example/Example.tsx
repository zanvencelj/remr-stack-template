import React, {useState} from "react";
import axios from "axios";

const Example = () => {
  const [getData, setGetData] = useState(null);

  const handleGetRequest = () => {
    axios.get("http://localhost:8000/api/test")
      .then(response => setGetData(response.data))
      .catch(error => console.error("Error fetching GET data:", error));
  };

  const clear = () => {
    setGetData(null);
  }

  return (
    <div className="p-8 bg-gray-50 text-gray-800">

      {/* Example of GET request to backend */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">GET Request (/api/test)</h2>
        <p className="mb-4">This is an example of a GET request to the backend.</p>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-2 py-2 px-4 border border-gray-400 rounded shadow block" onClick={handleGetRequest}>Fetch GET Data</button>
        Response:
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>{JSON.stringify(getData, null, 2)}</code>
        </pre>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-2 py-2 px-4 border border-gray-400 rounded shadow block" onClick={clear}>Clear</button>
      </section>
    </div>
  );
}

export default Example;
