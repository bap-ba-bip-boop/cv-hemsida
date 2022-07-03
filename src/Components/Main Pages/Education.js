import appSettings from '../../Settings/Components/Main Pages/Education.json';
import React from 'react'

export const Education = () =>
  <>
  {
    appSettings.Educations.map( (education,i) =>
        <div key={i}>
            <h3>{education.name}</h3>
            <span>{education.SchoolName} </span>
            <span>{education.place} </span>
            <span>{education.startDate}</span>
            <span> - {education.endDate}</span>
        </div>
    )
  }
  </>
