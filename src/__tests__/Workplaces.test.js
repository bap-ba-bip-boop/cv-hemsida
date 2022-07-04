import { render, screen } from '@testing-library/react';
import { Workplaces } from '../Components/Main Pages/Workplaces';

test(`Renders ${Workplaces.name} Element`,  () => {
  render(<Workplaces/>);

  
  const sut = screen.getAllByRole('heading');

  for(var item of sut)
  {
    expect(item).toBeInTheDocument();
  }
  
  }
)