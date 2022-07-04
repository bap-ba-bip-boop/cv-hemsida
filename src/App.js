import React, { useState } from 'react';

import {appSettings} from './Settings/App.json';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';

export const App = () => {

  const [activePage, SetActivePage] = useState(appSettings.summaryPage);

  const changeActivePage = input =>
  {
    SetActivePage(input);
  }

  return (
    <>
      <Header/>
      <Navbar
      buttonAction = {changeActivePage}
      SummaryPage = {appSettings.summaryPage}
      SkillsPage = {appSettings.skillsPage}
      WorkplacesPage = {appSettings.workplacesPage}
      EducationPage = {appSettings.educationPage}
      />
      <Main
      activePage = {activePage}
      SummaryPage = {appSettings.summaryPage}
      SkillsPage = {appSettings.skillsPage}
      WorkplacesPage = {appSettings.workplacesPage}
      EducationPage = {appSettings.educationPage}
      />
      <Footer/>
    </>
  )
}

export default App;