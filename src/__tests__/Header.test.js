import React from 'react'
import { render, screen } from '@testing-library/react';
import {Header} from '../Components/Header';

test(`Renders ${Header.name} Element`,  () => {
  render(<Header/>);

  const sut =  screen.getByRole('banner', {name:""});

  expect(sut).toBeInTheDocument();
  }
)