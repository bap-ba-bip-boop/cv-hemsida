import { render, screen } from '@testing-library/react';
import { Education } from '../Components/Main Pages/Education';

test(`Renders ${Education.name} Element`,  () => {
  render(<Education/>);

  
  const sut = screen.getAllByRole('heading');

  for(var item of sut)
  {
    expect(item).toBeInTheDocument();
  }
  
  }
)