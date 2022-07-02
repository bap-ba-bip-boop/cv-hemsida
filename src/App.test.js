import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import TestRenderer from 'react-test-renderer';
import { App } from './App';


it(`State Changes When`, () => {
    var newMessage = "test";
    //var root = TestRenderer.create(<App/>).root;

    var sut = TestRenderer.create(<App/>).root;

    sut.changeActivePage(newMessage);
    expect(sut.activePage).toBe(newMessage);
  })