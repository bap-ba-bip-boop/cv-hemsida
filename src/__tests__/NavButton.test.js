import React from 'react'
import { render, screen } from '@testing-library/react';
import {NavButton} from '../Components/Nav Components/NavButton';

test(`Renders ${NavButton.name} Element`,  () => {
    var buttonText = "whatever";
    const mockcallback = jest.fn();

  render(
    <NavButton
    buttonAction = {mockcallback}
    buttonText = {buttonText}
    />
  );

  const link =  screen.getByRole('link', {name: buttonText});

  link.click();

  expect(mockcallback).toHaveBeenCalledTimes(1);
  }
)