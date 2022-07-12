import appSettings from '../../Settings/Components/Main Pages/Skills.json';

import {LanguageComponent} from './Main Components/LanguageComponent'
import React from 'react'
import { ITStuffComponent } from './Main Components/ITStuffComponent';

export const Skills = () => {
  return (
    <div>
        <section>
            <h3>{appSettings.languageTitle}</h3>
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
        <section>
            <h3>{appSettings.ITStuffTitle}</h3>
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
    </div>
  )
}
