import appSettings from '../../Settings/Components/Main Pages/Summary.json';
import React from 'react'

export const Summary = props => {

  const local = appSettings.local.find(loc => loc.languageTag === props.languageTag);

  return (
    <>
        <h2 className='summaryTopicTitle'>{local.goalTitle}</h2>
        <hr/>
        <p className='summaryTopicContent'>{local.goalText}</p>


        <h2 className='summaryTopicTitle'>{local.profileTitle}</h2>
        <hr/>
        <ul className='summaryTopicList'>
          {local.profileContent.map(item => <li key={item}>{item}</li>)}
        </ul>

        <h2 className='summaryTopicTitle'>{local.personalTitle}</h2>
        <hr/>
        <p className='summaryTopicContent'>{local.personalContent}</p>
    </>
  )
}
