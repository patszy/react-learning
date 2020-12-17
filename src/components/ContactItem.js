import React from 'react';

export default function ContactItem({login, name, department}){
    return(
        <li>
            <div>
                <h4>{name}</h4>
                <p>{department}</p>
            </div>
        </li>
    )
}