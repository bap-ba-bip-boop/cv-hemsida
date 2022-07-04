import React from 'react'

import {Summary} from './Main Pages/Summary'
import {Skills} from './Main Pages/Skills'
import {Workplaces} from './Main Pages/Workplaces'
import {Education} from './Main Pages/Education'

export const Main = props => {
  return (
    <main>
      {props.activePage === props.SummaryPage && <Summary/>}
      {props.activePage === props.SkillsPage && <Skills/>}
      {props.activePage === props.WorkplacesPage && <Workplaces/>}
      {props.activePage === props.EducationPage && <Education/>}
    </main>
  )
}
