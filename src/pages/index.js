import { useState } from "react";
import InputForm from "../components/InputForm";
import Graph from "../components/Graph";
import DataTable from "../components/DataTable";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude, startDate, endDate) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://archive-api.open-meteo.com/v1/archive`, 
        {
          params: {
            latitude,
            longitude,
            start_date: startDate,
            end_date: endDate,
            daily: [
              "temperature_2m_max",
              "temperature_2m_min",
              "temperature_2m_mean",
              "apparent_temperature_max",
              "apparent_temperature_min",
              "apparent_temperature_mean"
            ],
            timezone: "auto",
          }
        }
      );
      setWeatherData(response.data.daily);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-white shadow-md shadow-green-200 p-4 flex items-center justify-between">
        
        <div className="text-xl font-bold text-green-700">InRisk</div>
       
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Weather API Data Dashboard
        </h1>
        
        <div className="flex items-center space-x-2">
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
            alt="Image"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-600 font-medium">Manish</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-4">
        <InputForm onSubmit={fetchWeatherData} />
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weatherData && (
          <div className="mt-8">
            <Graph data={weatherData} />
            <DataTable data={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
}
