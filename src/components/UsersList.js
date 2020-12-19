import React from 'react';

export default function UsersList({users}) {
    if(users.length > 0) {
        return (
            <ul>
                {users.map(user => <li key={user}>{user}</li>)}
            </ul>
        );
    }

    return (
        <p>No results!</p>
    )
}