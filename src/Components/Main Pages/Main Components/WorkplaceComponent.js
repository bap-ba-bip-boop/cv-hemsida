import React from 'react'

export const WorkplaceComponent = props => 
    <a className='workplaceContainter' href='#' onClick={ () => props.openEducation(props.educationIndex)}> 
        <h2>{props.role}</h2>
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
        {
            props.educationIndex !== props.selectedEducation &&
            (
                <p className='workplaceContainterMessage'>Visa Mer</p>
            )
        }
        {
            props.educationIndex === props.selectedEducation &&
            (
                <p className='workplaceContainterMessage'>Visa Mindre</p>
            )
        }
    </a>