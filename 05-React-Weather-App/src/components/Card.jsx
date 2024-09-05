import React from 'react';

const Card = ({ name, date, src, temperature, weatherText, country }) => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 text-white rounded-xl p-6 shadow-2xl transform transition-all hover:scale-105 hover:shadow-neon max-w-md mx-auto mt-8 relative group">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-30 transition duration-500"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center border-b border-purple-200 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-blue-200">{name}, {country}</h2>
            <p className="text-sm text-purple-200 mt-1">{new Date(date).toLocaleString()}</p>
          </div>
          <img 
            src={src} 
            alt={weatherText} 
            className="w-16 h-16 object-cover rounded-full border-2 border-yellow-400 shadow-lg" 
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-5xl font-black text-yellow-300">{temperature}°C</h3>
          <p className="text-purple-100 text-xl mt-2">{weatherText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
