import React from 'react'

export const LanguageComponent = props => {
  return (
    <div className='languageContainer'>
      <h3 className='languageContainerTitle'>{props.languageName}</h3>
      <p>{props.level}</p>
    </div>
  )
}
