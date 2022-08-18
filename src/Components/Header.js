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

        <div className='headervertdisp'>
          <p>email: {appSettings.Email} | tel: {appSettings.Telephone}</p>
          <div>
          {
            appSettings.links.map( (link, i) => 
              <a className = 'socialMediaLink' key = {i} href={link.link}>
                <box-icon color='white' name={link.linkIcon} type='logo'/>
                {link.linkText}
              </a>
            )
          }
          </div>
        </div>

      </div>
      <img className='headerPicture' src={image}></img>
    </header>
  )
}
