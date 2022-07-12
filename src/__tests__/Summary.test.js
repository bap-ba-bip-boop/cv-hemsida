import React from 'react'
import { render, screen } from '@testing-library/react';
import { Summary } from '../Components/Main Pages/Summary';
test(`Renders ${Summary.name} Element`,  () => {
  render(<Summary/>);

  expect(screen.getByRole('heading', {name:"Mål"})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name:"Profil"})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name:"Personligt"})).toBeInTheDocument();
  }
)