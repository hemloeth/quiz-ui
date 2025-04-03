import React from "react";
import "./Register.css"

function Register(){
    return(<div className="sign-up">
        <div className="heainds-resgiter">
            <p className="welcome-heading">Welcome back</p>
            <p className="sort-heading">Please enter your details</p>
        </div>
        <div className="in-field">
            <label>Name</label>
            <input 
            type="text"
            placeholder="Your Name"
            />

            <label>Email</label>
            <input 
            type="text"
            placeholder="example@gmail.com"
            />

            <label>Password</label>
            <input 
            type="password"
            placeholder="Your Password"
            />
            <button>Sign up</button>
        </div>
    </div>)
}

export default Register;