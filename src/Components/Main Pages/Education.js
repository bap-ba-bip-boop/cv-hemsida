import appSettings from '../../Settings/Components/Main Pages/Education.json';
import React from 'react'
import { EducationComponent } from './Main Components/EducationComponent';

export const Education = props =>{

  const local = appSettings.local.find(loc => loc.languageTag === props.languageTag);

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
          />
      )
    }
    </>
  )
}