import React from 'react';

export default class ContectItem extends React.Component{
    render() {
        const {login, name, department} = this.props;

        return(
            <li>
                <div>
                    <h4>{name}</h4>
                    <p>{department}</p>
                </div>
            </li>
        )
    }
}