import appSettings from '../../Settings/Components/Main Pages/Workplaces.json';

import React from 'react'

export const Workplaces = () => 
    <>
    {
    appSettings.workplaces.map( (workplace,i) =>
        <div key={i}> 
            <h3>{workplace.role}</h3>
            <span>{workplace.CompanyName} </span>
            <span>{workplace.place} </span>
            <span>{workplace.startDate}</span>
            <span>{workplace.endDate && " - " + workplace.endDate}</span>
            <ul>
                {workplace.responsibilities.map( resp =>
                    <li  key={resp}>{resp}</li>
                )}
            </ul>
        </div>
    )
    }
    </>