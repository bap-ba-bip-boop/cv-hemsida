
import React, { useState } from 'react'
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';

export const App = () => {

  const [activePage, SetActivePage] = useState("SummaryPage");

  const changeActivePage = input =>
  {
    console.log("prev-page:" + activePage + "\nnew-page: " + input);

    SetActivePage(input);
  }

  return (
    <>
      <Header/>
      <Navbar
      buttonAction = {changeActivePage}
      SummaryPage = "SummaryPage"
      SkillsPage = "SkillsPage"
      WorkplacesPage = "WorkplacesPage"
      EducationPage = "EducationPage"
      />
      <Main
      activePage = {activePage}
      SummaryPage = "SummaryPage"
      SkillsPage = "SkillsPage"
      WorkplacesPage = "WorkplacesPage"
      EducationPage = "EducationPage"
      />
      <Footer/>
    </>
  )
}

export default App;