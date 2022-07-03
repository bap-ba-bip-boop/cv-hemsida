import appSettings from '../../Settings/Components/Main Pages/Skills.json';
import React from 'react'

export const Competences = () => {
  return (
    <>
        <section>
            <h3>{appSettings.languageTitle}</h3>
            {appSettings.spokenLanguages.map(language =>
            <div key={language.languageName}>
            <span>{language.languageName}</span>
            <span>: {language.level}</span>
            </div>
              )
            }
        </section>
        <section>
            <h3>{appSettings.ITStuffTitle}</h3>
            {appSettings.ITStuff.map(category =>
                <div key ={category.CategoryName}>
                  <p>{category.CategoryName}</p>
                  {category.items.map(item => <span key={item}>{item}, </span>)} 
                </div>
              )
            }
        </section>
    </>
  )
}
