import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!latitude && !longitude && !startDate && !endDate) {
        alert("All fields are required. Please enter")
      }else if(latitude && longitude && startDate && endDate) {
      onSubmit(latitude, longitude, startDate, endDate);
    }
  };

  return (
    <form className="bg-white p-4 rounded shadow-md" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Fetch Weather Data
      </button>
    </form>
  );
}
