import React from 'react'

import {Summary} from './Main Pages/Summary'
import {Competences} from './Main Pages/Competences'
import {Workplaces} from './Main Pages/Workplaces'
import {Education} from './Main Pages/Education'

export const Main = props => {
  return (
    <main>
      {props.activePage === props.SummaryPage && <Summary/>}
      {props.activePage === props.SkillsPage && <Competences/>}
      {props.activePage === props.WorkplacesPage && <Workplaces/>}
      {props.activePage === props.EducationPage && <Education/>}
    </main>
  )
}
