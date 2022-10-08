import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ContactDetails = () => {
    const contact = useLoaderData();
    // console.log(contact);
    return (
        <div>
            <h1>Contact Details: {contact.name}</h1>
            <p>Phone no: {contact.phone}</p>
            <h2>Everything you need to about this person.</h2>
        </div>
    );
};

export default ContactDetails;