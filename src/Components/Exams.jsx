import React, { useState } from "react";
import './Exams.css';
import Card from "./Card";

function Exams() {
  // State to manage showing all cards or only the first 4
  const [showAll, setShowAll] = useState(false);

  // Sample card data
  const cards = [
    { id: 1, image: "images/Bitmap (4).png", text: "Prelim Exam", className: "prelim-card" },
    { id: 2, image: "images/Bitmap (1).png", text: "Bank Exam", className: "Bank-card" },
    { id: 3, image: "images/Bitmap (3).png", text: "Chemistry Exam", className: "chem-card" },
    { id: 4, image: "images/Bitmap (2).png", text: "Math Exam", className: "math-card" },
    { id: 5, image: "images/Bitmap (5).png", text: "Html Quiz", className: "html-card", imageClassName: "html-img" },
    { id: 6, image: "images/Bitmap (6).png", text: "Css Quiz", className: "css-card", imageClassName: "css-img" },
    { id: 7, image: "images/Bitmap (7).png", text: "JS Quiz", className: "js-card", imageClassName: "js-img" },
  ];

  // Toggle between showing all cards and showing only 4 cards
  const handleToggle = () => {
    setShowAll(prevState => !prevState);
  };

  // Determine which cards to display based on state
  const displayedCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div>
      <div className="examName">
        <h2 className="heading2">Lets Sharp Your Preparation</h2>
      </div>
      <div>
      <button onClick={handleToggle} className="explorebtn">
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
      <div className="bscModel">
        <h2 className="modelHeading">BSC Model Test</h2>
        <p className="modelDetail">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis.</p>
        <div className="bscImage">
          <img src="images/Rectangle 3.png" className="modelImage" alt="BSC Model"/>
        </div>
      </div>
      <div className={`card-container ${showAll ? 'expanded' : ''}`}>
        {displayedCards.map(card => (
          <Card
            key={card.id}
            image={card.image}
            text={card.text}
            className={card.className}
            imageClassName={card.imageClassName}
          />
        ))}
      </div>
      <div>
      </div>
    </div>
  );
}

export default Exams;
