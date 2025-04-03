import React from "react";
import './QuizCategory.css'
import QuizCard from "./QuizCard";

function QuizCategory(){
    const quizCards = [
        {
            image:'images/Oval (5).png',
            title:'Math',
            text:'"Test your math skills with this engaging quiz! Challenge yourself with a variety of questions to see how well you know the subject."',
            size:'Math-size'
        },

        {
            image:'images/Oval (1).png',
            title:'English',
            text:'"Put your command of the English language to the test! Dive into questions about grammar, literature, and language usage."',
            size:'English-size'
        },
        {
            image:'images/Oval (2).png',
            title:'Science',
            text:'"Unlock the wonders of science with this quiz! Explore questions across various scientific fields and see how well you understand the natural world."',
            size:'Science-size'
        },
        {
            image:'images/Oval (3).png',
            title:'Bangla',
            text:'"Discover your proficiency in Bangla with this engaging quiz! Assess your skills in reading, writing, and understanding the language."',
            size:'Bangla-size'
        },
        {
            image:'images/Oval (4).png',
            title:'General Knowledge',
            text:'"Broaden your horizons with this general knowledge quiz! Challenge yourself with questions on a variety of topics and see how much you know about the world."',
            size:'General-size'
        }
    ] 
    return(<div className="quiz-body">
        <div className="quizCategory">
            <h1 className="quiz-heading">Explore Quiz Category</h1>
        </div>
        <div>
            {
                quizCards.map((quiz, index) => (
                    <QuizCard 
                        key={index}
                        image={quiz.image}
                        title={quiz.title}
                        text={quiz.text}
                        size={quiz.size}
                    />
                ))
            }
        </div>

    </div>)
}

export default QuizCategory;