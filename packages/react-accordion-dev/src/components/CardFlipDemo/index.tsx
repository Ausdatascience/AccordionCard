import React from 'react';
import { CardFlip } from 'react-accordion-core';

const CardFlipDemo: React.FC = () => {
  const demoCards = [
    { title: "Card 1", details: "Content 1" },
    { title: "Card 2", details: "Content 2" },
    { title: "Card 3", details: "Content 3" }
  ];

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">CardFlip Demo</h1>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
        <CardFlip
          cards={demoCards}
          cardHeight={200}
          containerWidth={90}
          cardColor="#76B900"
        />
      </div>
    </div>
  );
};

export { CardFlipDemo }; 