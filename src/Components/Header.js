import React from 'react'
import appSettings from '../Settings/Components/Header.json';

export const Header = () => {
  return (
    <header className="temp">
      <h2>{appSettings.Title}</h2>
      <h2>{appSettings.Name}</h2>
      <p>{appSettings.Email}</p>
      <p>{appSettings.Telephone}</p>
      <p>{appSettings.Address}</p>
      <p>{appSettings.Id}</p>
    </header>
  )
}
