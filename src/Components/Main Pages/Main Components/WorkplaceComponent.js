import React from 'react'

import appSettings from '../../../Settings/Components/Main Pages/Main Components/WorkplaceComponent.json';

export const WorkplaceComponent = props => 
    <a className='workplaceContainter' href='#' onClick={ () => props.openEducation(props.educationIndex)}> 
        <h2 className='workplaceContainterTitle'>{props.role}</h2>
        <span>
            {props.CompanyName} | {props.place} | {props.startDate} {props.endDate && " - " + props.endDate}
        </span>
        {
            props.educationIndex === props.selectedEducation &&
            (
                <section className='workplaceContainterContent'>
                    <ul className='workplaceContainterList'>
                        {props.responsibilities.map( resp =>
                            <li key={resp}>{resp}</li>
                        )}
                    </ul>
                </section>
            )
        }
        <p className='workplaceContainterMessage'>
            {
            props.educationIndex !== props.selectedEducation ?
            appSettings.showMore :
            appSettings.showLess
            }
        </p>
    </a>