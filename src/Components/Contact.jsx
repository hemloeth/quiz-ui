import React from "react";
import { useState } from "react";

function Contact(){

    function nameHandler(event){
        setName(event.target.value);
    }

    function emailHandler(event){
        setEmail(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        let FormErrors = {};

        if(!name){
            FormErrors.name = "Name Is Required"
        }

        if(!email){
            FormErrors.email = "Email Is Required"
        }
        if(Object.keys(FormErrors).length > 0){
            setError(FormErrors);
        }else{
            console.log("Form Submitted Successfully", {name, email})
            setError({});
        }
    }

    const [name,setName] = useState('');
    const [email, setEmail] = useState('')
    const [errors, setError] = useState({})
    return(<div>
        <div>
            <form onSubmit={submitHandler}>

                <div>
                <label>Name</label>
                <input 
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={nameHandler}
                />

                {errors.name && <span className="error">{errors.name}</span>}

                </div>
                <br />
               <div>
               <label>Email Address</label>
                <input 
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={emailHandler}
                
                />

                {errors.email && <span className="error">{errors.email}</span>}
                
               </div>
               <br />
               <button>SUBMIT</button>
            </form>
        </div>
    </div>)
}

export default Contact;