import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log('Form submitted:', { name, email, message });
        // You can also clear the form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    // Contact from is not finished
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    placeholder="Write your message here."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;