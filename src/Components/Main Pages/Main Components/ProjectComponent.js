import React from 'react'

import appSettings from '../../../Settings/Components/Main Pages/Main Components/ProjectComponent.json';
import 'boxicons';

export const ProjectComponent = props => {

    const local = appSettings.local.find(loc => loc.languageTag === props.languageTag);
  
  return (
    <a className='workplaceContainter' href='#' onClick={ () => props.openEducation(props.educationIndex)}>
        <h2>{props.projectName}</h2>

        {
            props.educationIndex === props.selectedEducation &&
            (
                <>
                    <p>description goes here</p>
                    
                    <a className = 'socialMediaLink' href={props.linkToProject}>
                    <box-icon color='white' name="github" type='logo'/>
                    github
                    </a>
                </>
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
  )
}
