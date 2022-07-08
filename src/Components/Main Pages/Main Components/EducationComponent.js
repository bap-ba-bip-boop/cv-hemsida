import React from 'react'

export const EducationComponent = props => {
  return (
    <div>
        <h3>{props.name}</h3>
        <span>{props.SchoolName} </span>
        <span>{props.place} </span>
        <span>{props.startDate}</span>
        <span> - {props.endDate}</span>
    </div>
  )
}
