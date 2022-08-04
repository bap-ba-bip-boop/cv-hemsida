import React, { useEffect, useState } from 'react';

import appSettings from './Settings/App.json';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';


export const App = () => {

  const [languageIndex, setLanguageIndex] = useState(0);
  const [activePage, SetActivePage] = useState(appSettings.pages[languageIndex]);


  const changeActivePage = input => {
    SetActivePage(input);
  }

  const setPageTitle = input => {
    const titlePost = "CV - Carl Bergqvist"
    document.title = input + " - " + titlePost;
  }

  const getNextLanguageTag =()=>
  {
    let newIndex = languageIndex + 1;
    newIndex = (newIndex % appSettings.languageTag.length);
    return newIndex;
  }

  const changeActiveLanguage = () => {
    setLanguageIndex(getNextLanguageTag());
  }

  useEffect(
    () => {
      setPageTitle(activePage);
    }
  )

  return (
    <div className="siteContainer">
      <Header
        changeLanguage={changeActiveLanguage}
        nextLanguageTag={appSettings.languageTag[getNextLanguageTag()]}
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