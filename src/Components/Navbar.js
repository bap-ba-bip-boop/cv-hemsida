import React from 'react'
import { NavButton } from './Nav Components/NavButton';

export const Navbar = props => {

  return (
    <nav className='siteNav'>
      {
        props.Pages.map( (page, i) =>
          <NavButton
            key={i}
            buttonAction = {props.buttonAction}
            buttonText = {page.Text}
            redirectPage = {page.Page}
          />
        )
      }
    </nav>
  )
}
