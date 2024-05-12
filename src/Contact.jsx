import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can send formData to your backend or use an email API to send the email
        console.log(formData);
        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            description: ''
        });
    };

    return (
        <section className='bmain'>
            <form className='form' onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='lname' htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label className='lname' htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label className='lname' htmlFor="description">Description</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
            </div>
            <button id='button' type="submit">Submit</button>
        </form>
        </section>
    );
};

export default Contact;
