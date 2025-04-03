import React, { useState } from "react";
import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function PhoneNum() {
    const [phoneNum, setPhoneNum] = useState('');
    const [valid, setValid] = useState(true);

    function changeHandler(value) {
        setPhoneNum(value);
        setValid(validatePhoneNum(value));
    }

    const validatePhoneNum = (phoneNum) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNum);
    }

    return (
        <div>
            <label>
                Phone Number:
                <PhoneInput
                    countries={['IN']}
                    value={phoneNum}
                    onChange={changeHandler}
                />
            </label>
            {!valid && <p>Please enter a correct phone number</p>}
        </div>
    );
}

export default PhoneNum;
