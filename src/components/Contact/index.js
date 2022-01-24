import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [error, setError] = useState("");
    const { name, email, message } = form;

    const submit = (e) => {
        e.preventDefault();
        if(!error){
            console.log("Submit Form", form);
        }
    };

    const change = (e) => {
        if(e.target.name === "email"){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setError("Please enter a valid email!");
            } else {
                setError("");
            }
        }
        if(!error){
            setForm({ ...form, [e.target.name]: e.target.value });
            console.log("Handle Form", form);
        }
    };

    return(
        <section className="my-5">
            <h1 id="contact">Contact Me!</h1>
                <form className="contact-form" onSubmit={submit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            onBlur={change}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={email}
                            onBlur={change}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            rows="6"
                            defaultValue={message}
                            onBlur={change}
                            required
                        />
                    </div>
                    {error && (
                        <div>
                            <p className="error-message">{error}</p>
                        </div>
                    )}
                    <button type="submit">Send</button>
                    <p>(Form not yet connected to back-end!)</p>
                </form>
        </section>
    )
}

export default Contact;