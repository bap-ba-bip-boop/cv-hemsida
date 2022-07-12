import React from 'react'
import { render, screen } from '@testing-library/react';
import {Main} from '../Components/Main';

test(`Renders ${Main.name} Element`,  () => {
  render(<Main/>);

  const sut =  screen.getByRole('main', {name:""});

  expect(sut).toBeInTheDocument();
  }
)

//make sure that only the activeElement is showing?
test(`${Main.name} Element only renders the active page`,  () => {
  render(
    <Main
      activePage = {"active"}
      SummaryPage = {"active"}
      SkillsPage = {"inactive1"}
      WorkplacesPage = {"inactive2"}
      EducationPage = {"inactive3"}
      />
  );

  //const sut =  screen.getByRole('brr', {name:""});

  expect(screen.getByRole('heading', {name:"Mål"})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name:"Profil"})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name:"Personligt"})).toBeInTheDocument();
  }
)