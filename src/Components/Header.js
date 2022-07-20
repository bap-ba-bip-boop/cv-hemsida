import React from 'react'
import appSettings from '../Settings/Components/Header.json';

export const Header = props => {
  return (
    <header className="siteHeader">
      <a href='#' onClick={() => props.changeLanguage()}>language</a>

      <h1 className='siteHeaderTitle'>{appSettings.Title}</h1>
      <h2 className='siteHeaderTitle'>{appSettings.Name}</h2>
      <p>{appSettings.Email}</p>
      <p>{appSettings.Telephone}</p>
      <p>{appSettings.Address}</p>
      <p>{appSettings.Id}</p>
    </header>
  )
}
