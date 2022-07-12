import React from 'react'
import { render, screen } from '@testing-library/react';
import { Skills } from '../Components/Main Pages/Skills';

test(`Renders ${Skills.name} Element`,  () => {
  render(<Skills/>);

  expect(screen.getByRole('heading', {name:"Språk"})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name:"Prokrammeringsspråk och färdigheter"})).toBeInTheDocument();
  }
)