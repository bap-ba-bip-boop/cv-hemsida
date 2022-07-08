import appSettings from '../../Settings/Components/Main Pages/Workplaces.json';
import {WorkplaceComponent} from './Main Components/WorkplaceComponent'

import React from 'react'

export const Workplaces = () => 
    <>
    {
    appSettings.workplaces.map( (workplace, i) =>
        <WorkplaceComponent
            key={i}
            role={workplace.role}
            CompanyName={workplace.CompanyName}
            place={workplace.place}
            startDate={workplace.startDate}
            endDate={workplace.endDate}
            responsibilities={workplace.responsibilities}
        />
    )
    }
    </>