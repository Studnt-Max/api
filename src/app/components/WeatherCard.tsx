import React from 'react';

interface WeatherCardProps {
  data: any;
  onRemove: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, onRemove }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        &times;
      </button>
      <h2 className="text-xl font-bold">{data.location.name}</h2>
      <p className="text-gray-600">{data.location.country}</p>
      <div className="mt-4">
        <p className="text-gray-800">Temperature: {data.current.temp_c}°C</p>
        <p className="text-gray-800">Condition: {data.current.condition.text}</p>
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
          className="w-10 h-10"
        />
      </div>
    </div>
  );
};

export default WeatherCard;