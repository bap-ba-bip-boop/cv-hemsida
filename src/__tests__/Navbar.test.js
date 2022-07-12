import React from 'react'
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Components/Navbar';
test(`Renders ${Navbar.name} Element`,  () => {
  render(<Navbar/>);

  const sut =  screen.getByRole('navigation', {name:""});

  expect(sut).toBeInTheDocument();
  }
)