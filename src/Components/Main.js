import React from 'react'

import {Summary} from './Main Pages/Summary'
import {Skills} from './Main Pages/Skills'
import {Workplaces} from './Main Pages/Workplaces'
import {Education} from './Main Pages/Education'
import {Links} from './Main Pages/Links'

export const Main = props => {
  return (
    <main className='siteMain'>
      {props.activePage === "Summary" && <Summary/>}
      {props.activePage === "Skills" && <Skills/>}
      {props.activePage === "Workplaces" && <Workplaces/>}
      {props.activePage === "Education" && <Education/>}
      {props.activePage === "Links" && <Links/>}
    </main>
  )
}
