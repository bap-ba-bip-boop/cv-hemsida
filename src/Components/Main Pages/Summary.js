import appSettings from '../../Settings/Components/Main Pages/Summary.json';
import React from 'react'

export const Summary = props => {

  const local = appSettings.local.find(loc => loc.languageTag === props.languageTag);

  return (
    <>
        <h2 className='summaryTopicTitle'>{local.goalTitle}</h2>
        <hr/>
        <p className='summaryTopicContent'>{local.goalText}</p>
    </>
  )
}
