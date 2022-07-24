import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import appSettings from '../../../Settings/Components/Main Pages/Main Components/ProjectComponent.json';
import 'boxicons';

export const ProjectComponent = props => {

    const local = appSettings.local.find(loc => loc.languageTag === props.languageTag);
    const [content, setContent] = useState();
  
    useEffect( () =>{
        fetch(props.readMeAddress)
            .then(res => res.text())
            .then((md) => {
                setContent(md)
              })
    }, [])

  return (
    <div className='projectContainter'>

        {
            props.educationIndex !== props.selectedEducation && <h2 className='projectContainerSmallTitle'>{props.projectName}</h2>
        }

        {
            props.educationIndex === props.selectedEducation &&
            (
                <>
                    <ReactMarkdown className='projectContainer'>{content}</ReactMarkdown>
                    
                    <a className = 'socialMediaLink' href={props.linkToProject}>
                    <box-icon color='white' name='github' type='logo'/>
                    github
                    </a>
                </>
            )
        }

        <p className='workplaceContainterMessage' onClick={ () => props.openEducation(props.educationIndex)}>
            {
            props.educationIndex !== props.selectedEducation ?
            local.showMore :
            local.showLess
            }
        </p>
    </div>
  )
}
