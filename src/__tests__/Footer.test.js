import { render, screen } from '@testing-library/react';
import {Footer} from '../Components/Footer';

test(`Renders ${Footer.name} Element`,  () => {
  render(<Footer/>);

  const sut =  screen.getByRole('contentinfo', {name:""});

  expect(sut).toBeInTheDocument();
  }
)