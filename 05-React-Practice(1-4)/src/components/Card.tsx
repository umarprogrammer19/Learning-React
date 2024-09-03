import React from "react";
export default function Card({ imageUrl, title, character }) {
    return (
        <>
            <div className="w-1/4 p-4 rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105">
                <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
                <div className="px-4 py-4">
                    <div className="font-bold text-2xl mb-2 text-center">{title}</div>
                    <p className="text-gray-600 text-lg text-center">{character}</p>
                </div>
            </div>
        </>
    )
}