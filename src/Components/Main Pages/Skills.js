import appSettings from '../../Settings/Components/Main Pages/Skills.json';

import {LanguageComponent} from './Main Components/LanguageComponent'
import React from 'react'
import { ITStuffComponent } from './Main Components/ITStuffComponent';

export const Skills = () => {
  return (
    <>
      <section>
          <h2 className='skillsTitle'>{appSettings.ITStuffTitle}</h2>
          {
          appSettings.ITStuff.map( (category,i) =>
              <ITStuffComponent
              key={i}
              CategoryName={category.CategoryName}
              items={category.items}
              />
            )
          }
      </section>
      <section>
          <h2 className='skillsTitle'>{appSettings.languageTitle}</h2>
          {
          appSettings.spokenLanguages.map((language,i) =>
            <LanguageComponent
            key={i}
            languageName={language.languageName}
            level={language.level}
            />
            )
          }
      </section>
    </>
  )
}
