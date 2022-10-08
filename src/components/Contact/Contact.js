import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = ({ contact }) => {
    const { id, name, email, username } = contact
    // console.log(contact);
    return (
        <div className='contact'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>UserName: <Link to={`/contact/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Contact;