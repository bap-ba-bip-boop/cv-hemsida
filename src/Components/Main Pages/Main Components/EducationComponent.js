import React from 'react'

import appSettings from '../../../Settings/Components/Main Pages/Main Components/EducationComponent.json';

export const EducationComponent = props => {

  const local = appSettings.local.find(loc => loc.languageTag === props.languageTag);

  return (
    <a className='workplaceContainter' href='#' onClick={ () => props.openEducation(props.educationIndex)}> 
    <h2 className='workplaceContainterTitle'>{props.name}</h2>
    <span>
      {props.SchoolName} | {props.place} | {props.startDate} - {props.endDate}
    </span>
    {
        props.educationIndex === props.selectedEducation &&
        (
            <section className='workplaceContainterContent'>
                <ul className='workplaceContainterList'>
                    {props.notes.map( resp =>
                        <li key={resp}>{resp}</li>
                    )}
                </ul>
            </section>
        )
    }
    <p className='workplaceContainterMessage'>
        {
        props.educationIndex !== props.selectedEducation ?
        local.showMore :
        local.showLess
        }
    </p>
</a>
/*
<div className='educationContainter'>
        <h2 className='educationContainterTitle'>{props.name}</h2>
        <span>{props.SchoolName} | {props.place} | {props.startDate} - {props.endDate}</span>
    </div>
*/
  )
}
