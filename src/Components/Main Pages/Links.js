import appSettings from '../../Settings/Components/Main Pages/Links.json';
import React from 'react'
import 'boxicons'

export const Links = () => {
  return (
    <>
    {
        appSettings.links.map( (link, i) => 
          <a className = 'socialMediaLink' key = {i} href={link.link}>
            <box-icon name={link.linkIcon} type='logo'/>
            {link.linkText}
            </a>
        )
    }
    </>
  )
}