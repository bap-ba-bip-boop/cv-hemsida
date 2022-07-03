import appSettings from '../../Settings/Components/Main Pages/Summary.json';
import React from 'react'

export const Summary = () => {
  return (
    <>
        <h3>{appSettings.goalTitle}</h3>
        <p>{appSettings.goalText}</p>


        <h3>{appSettings.profileTitle}</h3>
        <ul>
          {appSettings.profileContent.map(item => <li key={item}>{item}</li>)}
        </ul>

        <h3>{appSettings.personalTitle}</h3>personalContent
        <p>{appSettings.personalContent}</p>
    </>
  )
}
