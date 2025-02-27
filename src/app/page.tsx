'use client';

import React, { useState } from 'react';
import WeatherCard from "../app/components/WeatherCard";

const Page: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any[]>([]);

  const API_KEY = 'cc79efb5282c4b2cbfc193250252602';

  const handleSearch = async () => {
    if (city.trim() === '') return;

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      const data = await response.json();

      if (data.error) {
        alert(data.error.message);
        return;
      }

      setWeatherData((prevData) => [...prevData, data]);
      setCity('');
  };

  const handleRemoveCard = (index: number) => {
    setWeatherData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {weatherData.map((data, index) => (
            <WeatherCard
              key={index}
              data={data}
              onRemove={() => handleRemoveCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;