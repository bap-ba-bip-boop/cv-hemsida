import appSettings from '../../Settings/Components/Main Pages/Links.json';
import React from 'react'

export const Links = () => {
  return (
    <>
    {
        appSettings.links.map( (link, i) => 
            <a key = {i} href={link.link}>{link.linkText}</a>
        )
    }
    </>
  )
}
