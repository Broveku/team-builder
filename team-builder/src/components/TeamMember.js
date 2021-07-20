import React from 'react';


export default function TeamMember(props) {
    return (
        <div className='containers'>
            <h1>{props.teamMember.name}</h1>
            <p>{props.teamMember.email}</p>
            <p>{props.teamMember.role}</p>
        </div>
    );
}

