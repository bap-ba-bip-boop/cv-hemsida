import React from 'react'

import {Summary} from './Main Pages/Summary'
import {Skills} from './Main Pages/Skills'
import {Workplaces} from './Main Pages/Workplaces'
import {Education} from './Main Pages/Education'
import {Links} from './Main Pages/Links'

export const Main = props => {
  console.log("Skills Name: " + Skills.name);
  return (
    <main className='siteMain'>
      {props.activePage === Summary.name && <Summary/>}
      {props.activePage === Skills.name && <Skills/>}
      {props.activePage === Workplaces.name && <Workplaces/>}
      {props.activePage === Education.name && <Education/>}
      {props.activePage === Links.name && <Links/>}
    </main>
  )
}
