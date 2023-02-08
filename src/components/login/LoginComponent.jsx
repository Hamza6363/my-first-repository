import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";



export default function LoginComponent() {
    return (
        <div className='LoginPage'>
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="">UserName</label>
                    <input type="text" name="" id="" placeholder='Username' />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" placeholder='Email' />
                </div>
                <ReCAPTCHA
                    sitekey="Your client site key"
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
