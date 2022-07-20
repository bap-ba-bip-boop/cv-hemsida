import React, { useState } from 'react';

import appSettings from '../../Settings/Components/Main Pages/Workplaces.json';
import {WorkplaceComponent} from './Main Components/WorkplaceComponent'

export const Workplaces = props => {
    
    const local = appSettings.local.find(loc => loc.languageTag === props.languageTag);

    const noneSelected = "None";
    const [openEducation, setOpenEducation] = useState(noneSelected);

    const changeSelected = newEducation => {
        if(newEducation === openEducation)
            setOpenEducation(noneSelected)
        else
            setOpenEducation(newEducation)
    }
    
    return(
        <>
        {
        local.workplaces.map( (workplace, i) =>
            <WorkplaceComponent
                key={i}
                role={workplace.role}
                CompanyName={workplace.CompanyName}
                place={workplace.place}
                startDate={workplace.startDate}
                endDate={workplace.endDate}
                responsibilities={workplace.responsibilities}
                selectedEducation={openEducation}
                openEducation={changeSelected}
                educationIndex={i+""}
            />
        )
        }
        </>
    );
}