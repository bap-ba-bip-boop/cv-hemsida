import React, { useState } from 'react';

import appSettings from './Settings/App.json';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';


export const App = () => {

  const [languageIndex, setLanguageIndex] = useState(0);
  const [activePage, SetActivePage] = useState(appSettings.pages[languageIndex]);

  console.log(activePage);

  const changeActivePage = input => {
    SetActivePage(input);
  }
  const changeActiveLanguage = () => {
    let newIndex = languageIndex + 1;
    newIndex = (newIndex % appSettings.languageTag.length);
    setLanguageIndex(newIndex);
  }

  return (
    <div className="siteContainer">
      <Header
        changeLanguage={changeActiveLanguage}
      />
      <Navbar
        buttonAction={changeActivePage}
        Pages={
          appSettings.pages
        }
        languageTag={appSettings.languageTag[languageIndex]}
      />
      <Main
        activePage={activePage}
        languageTag={appSettings.languageTag[languageIndex]}
      />
      <Footer />
    </div>
  )
}

export default App;

/*
JSON files are imported.
Empty tags (<></>) are imported
Commit + 'npm run deploy'

{Module Name}.name is not compiled
*/