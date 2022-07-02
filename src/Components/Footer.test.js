import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import {unmountComponentAtNode } from "react-dom";

import {Footer} from './Footer';

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

it(`Renders ${typeof Footer} Element`, () => {
  var sut = <Footer/>;
  act(()=>{
    render(sut, container);
  });
  expect(typeof container.firstChild).toBe(typeof sut);
}
)