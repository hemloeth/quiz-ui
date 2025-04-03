import React, { useEffect } from "react";
import './SecondPage.css';
import Aos from "aos";
import 'aos/dist/aos.css';

function SecondPage(){

    useEffect(() => {
        Aos.init({
            duration:700,
        });
    },[]);

    return(<div className="SecondPage">
        <div className="inside">

        <p className="play">HOW TO PLAY</p>

        <div className="step1" data-aos="fade-up">
            <img src="images/step1.png" className="first"></img>
           <h4 className="h4">Step 1</h4>
           <p className="para4">Enter the Phone Number And Click Register</p>
        </div>

        <div className="step2" data-aos="fade-up">
            <img src="images/step2.png" className="second"></img>
            <h4 className="h42">Step 2</h4>
            <p className="code">Enter the Verification Code And Click Verify</p>
        </div>

        <div className="step3" data-aos="fade-up">
            <img src="images/step3.png" className="third"></img>
            <h4 className="h43">Step 3</h4>
            <p className="info">Enter Your Info And Click Play Quiz</p>
        </div>
        <div className="step4" data-aos="fade-up">
            <img src="images/step4.png" className="four"></img>
        </div>

        <div className="step5" data-aos="fade-up">
        <img src="images/step5.png" className="five"></img>
        </div>

        <div className="step6" data-aos="fade-up">
        <img src="images/step6.png" className="six"></img>
        </div>
        </div>

    </div>)
}

export default SecondPage;