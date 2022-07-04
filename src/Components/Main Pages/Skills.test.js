import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import { Skills } from './Skills';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it(`Renders ${typeof Skills} Element`, () => {
  var sut = <Skills/>;
  act(()=>{
    render(sut, container);
  });
  expect(typeof container.firstChild).toBe(typeof sut);
}
)