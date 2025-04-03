import React from 'react';
import './QuizCard.css'; // Import CSS for card styles

const QuizCard = ({ image, title, text, size }) => {
  return (
    <div className={`quiz ${size}`}>

      <div className='quizImage-conatiner'></div>
      <img src={image} alt={title} className="quiz-image" />

      <div className="quiz-content">
        <h2 className="quiz-title">{title}</h2>
        <p className="quiz-text">{text}</p>
      </div>

    </div>
  );
};

export default QuizCard;
