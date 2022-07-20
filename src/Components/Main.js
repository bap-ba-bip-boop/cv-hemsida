import React from 'react'

import {Summary} from './Main Pages/Summary'
import {Skills} from './Main Pages/Skills'
import {Workplaces} from './Main Pages/Workplaces'
import {Education} from './Main Pages/Education'
import {Links} from './Main Pages/Links'

export const Main = props => {
  return (
    <main className='siteMain'>
      {props.activePage === "Summary" && <Summary
        languageTag={props.languageTag}
      />}
      {props.activePage === "Skills" && <Skills
        languageTag={props.languageTag}
        />}
      {props.activePage === "Workplaces" && <Workplaces
        languageTag={props.languageTag}
        />}
      {props.activePage === "Education" && <Education
        languageTag={props.languageTag}
        />}
      {props.activePage === "Links" && <Links
        languageTag={props.languageTag}
        />}
    </main>
  )
}
