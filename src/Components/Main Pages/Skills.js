import appSettings from '../../Settings/Components/Main Pages/Skills.json';

import {LanguageComponent} from './Main Components/LanguageComponent'
import React from 'react'
import { ITStuffComponent } from './Main Components/ITStuffComponent';

export const Skills = props => {

  const local = appSettings.local.find(loc => loc.languageTag === props.languageTag);

  return (
    <>
      <section>
        <h2 className='skillsTitle'>{local.ITStuffTitle}</h2>
        <hr/>
        {
        local.ITStuff.map( (category,i) =>
            <ITStuffComponent
            key={i}
            CategoryName={category.CategoryName}
            items={category.items}
            />
          )
        }
      </section>
      <section>
        <h2 className='skillsTitle'>{local.languageTitle}</h2>
        <hr/>
        {
        local.spokenLanguages.map( (language,i) =>
          <LanguageComponent
          key={i}
          languageName={language.languageName}
          level={language.level}
          />
          )
        }
      </section>
      <section>
        <h2 className='skillsTitle'>{local.DriversLicense}</h2>

        <hr/>
        <p className='driversLicenseType'>{local.DriversLicenceType}</p>
      </section>
    </>
  )
}
