import React, { useState } from 'react'

import appSettings from '../../Settings/Components/Main Pages/Projects.json';
import {ProjectComponent} from './Main Components/ProjectComponent'

export const Projects = props => {

    const noneSelected = "None";
    const [openEducation, setOpenEducation] = useState(noneSelected);

    const changeSelected = newEducation => {
        if(newEducation === openEducation)
            setOpenEducation(noneSelected)
        else
            setOpenEducation(newEducation)
    }
    
    return (
      <>{
          appSettings.projects.map( (proj, i) =>
              <ProjectComponent
                    key={i}
                    projectName={proj.projectName}
                    readMeAddress={proj.readMeAddress}
                    linkToProject={proj.linkToProject}
                    languageTag={props.languageTag}
                    selectedEducation={openEducation}
                    openEducation={changeSelected}
                    educationIndex={i+""}
              />
          )
      }</>
    )
}
