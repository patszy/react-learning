import React from 'react';
import ContactItem from './ContactItem';

export default function ContactsList(){
    return(
        <ul>
            <ContactItem login="patszy" name="Patryk" department="IT Student"/>
            <ContactItem login="lanq" name="Kacper" department="It Student"/>
            <ContactItem login="admin" name="Administrator" department="Boss of Bosses"/>
        </ul>
    )
}