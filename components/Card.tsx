import React from "react";

interface CardProps {
  discordName: string;
  technology: string;
}

export const Card: React.FC<CardProps> = ({ discordName, technology }) => {
  return (
    <div className="mb-4 max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{discordName}</div>
        <p className="text-gray-700 text-base">{technology}</p>
      </div>
    </div>
  );
};
