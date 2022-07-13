import appSettings from '../../Settings/Components/Main Pages/Summary.json';
import React from 'react'

export const Summary = () => {
  return (
    <>
        <h2 className='summaryTopicTitle'>{appSettings.goalTitle}</h2>
        <p className='summaryTopicContent'>{appSettings.goalText}</p>


        <h2 className='summaryTopicTitle'>{appSettings.profileTitle}</h2>
        <ul className='summaryTopicList'>
          {appSettings.profileContent.map(item => <li key={item}>{item}</li>)}
        </ul>

        <h2 className='summaryTopicTitle'>{appSettings.personalTitle}</h2>
        <p className='summaryTopicContent'>{appSettings.personalContent}</p>
    </>
  )
}
