import React from 'react'

export const WorkplaceComponent = props => 
    <div> 
        <h3>{props.role}</h3>
        <span>{props.CompanyName} </span>
        <span>{props.place} </span>
        <span>{props.startDate}</span>
        <span>{props.endDate && " - " + props.endDate}</span>
        <ul>
            {props.responsibilities.map( resp =>
                <li key={resp}>{resp}</li>
            )}
        </ul>
    </div>