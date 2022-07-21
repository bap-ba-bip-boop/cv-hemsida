import appSettings from '../../Settings/Components/Main Pages/Education.json';
import React, { useState } from 'react'
import { EducationComponent } from './Main Components/EducationComponent';

export const Education = props =>{

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
      local.Educations.map( (education, i) =>
          <EducationComponent
          key={i}
          name = {education.name}
          SchoolName = {education.SchoolName}
          place = {education.place}
          startDate = {education.startDate}
          endDate = {education.endDate}
          notes = {education.notes}
          selectedEducation={openEducation}
          openEducation={changeSelected}
          educationIndex={i+""}
          languageTag={props.languageTag}
          />
      )
    }
    </>
  )
}