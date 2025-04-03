import React from "react";
import './Contactus.css'
import Footer from "./Footer";

function Contactus(){
    return(
        <>
            
            <div className="contact-conatiner">
                <div>
                <img src="images/Group 330.png" className="style-img"></img>
                <Footer />
            </div>

            <div className="overlay-text">
                <h3 className="heading-us">CONTACT US</h3>
                <h2 className="heading-touch">Get In Touch</h2>
                <p className="help-para">
                    Contact Us We Are Happy To Help You!
                </p>
            </div>
            
            <div className="form-container">

                <div className="internal-container">

                    <div className="your-name">
                    <label className="labe-name">Name</label>
                    <input placeholder="Your Name" type="text" className="input-field"></input>
                    </div>

                    <div className="your-mail">
                        <label className="label-email">Email</label>
                        <input placeholder="Your Mail" type="text" className="input-field"></input>
                    </div>

                    <div className="comment">
                        <label className="label-comment">Comment</label>
                        <textarea placeholder="Your Comment" type="text" className="comment-field"></textarea>
                    </div>

                    <div className="contact-btn">
                        <button className="submit-query">Submit</button>
                    </div>

                    </div>
                   
            </div>
           
        </div>
         
        </>
        
    )
}

export default Contactus;