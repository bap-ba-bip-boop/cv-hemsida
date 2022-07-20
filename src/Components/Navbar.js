import React from 'react'
import { NavButton } from './Nav Components/NavButton';
import appSettings from '../Settings/Components/Navbar.json';

export const Navbar = props => {

  const  local = appSettings.local.find(loc => loc.languageTag === props.languageTag);

  return (
    <nav className='siteNav'>
      {
        props.Pages.map( (page, i) =>
          <NavButton
            key={i}
            buttonAction = {props.buttonAction}
            buttonText = {local[page]}
            redirectPage = {page}
          />
        )
      }
    </nav>
  )
}
