import React from 'react'

export const LanguageComponent = props => {
  return (
    <div>
      <span>{props.languageName}</span>
      <span>: {props.level}</span>
    </div>
  )
}
