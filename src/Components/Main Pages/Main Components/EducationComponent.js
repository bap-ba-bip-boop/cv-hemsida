import React from 'react'

export const EducationComponent = props => {
  return (
    <div className='educationContainter'>
        <h2 className='educationContainterTitle'>{props.name}</h2>
        <span>{props.SchoolName} | {props.place} | {props.startDate} - {props.endDate}</span>
    </div>
  )
}
