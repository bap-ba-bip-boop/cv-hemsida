import React from 'react'
import appSettings from '../Settings/Components/Header.json';
import image from '../images/pfp.png';

export const Header = props => {
  return (
    <header className="siteHeader">
      <div className='headerInfo'>
        <div className='headervertdisp'>
          <h1 className='siteHeaderTitle'>{appSettings.Name} - {appSettings.Title}</h1>
          <a className='languageLink' href='#' onClick={() => props.changeLanguage()}>{props.nextLanguageTag}</a>
        </div>
        <hr/>
        <p>email: {appSettings.Email} | tel: {appSettings.Telephone}</p>
      </div>
      <img className='headerPicture' src={image}></img>
    </header>
  )
}
