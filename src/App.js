import React, { useState } from 'react';

import appSettings from './Settings/App.json';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';


export const App = () => {

  const [activePage, SetActivePage] = useState(appSettings.pages[0].Page);

  console.log("start page value: " + appSettings.pages[0].Page);

  const changeActivePage = input =>
  {
    SetActivePage(input);
  }

  return (
    <div className = "siteContainer">
      <Header/>
      <Navbar
      buttonAction = {changeActivePage}
      Pages = {appSettings.pages}
      />
      <Main
      activePage = {activePage}
      />
      <Footer/>
    </div>
  )
}

export default App;