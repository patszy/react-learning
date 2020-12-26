import React from 'react';

export default function UsersList({users, userSelected}) {
    if(users.length > 0) {
        return (
            <ul>
                {users.map(user => <li onClick={userSelected.bind(null, user)} key={user}>{user}</li>)}
            </ul>
        );
    }

    return (
        <p>No results!</p>
    )
}