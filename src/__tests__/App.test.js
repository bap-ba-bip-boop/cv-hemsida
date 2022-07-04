//import TestRenderer from 'react-test-renderer';
//import { App } from '../App';
//
//
//it(`State Changes When`, () => {
//    var newMessage = "test";
//    //var root = TestRenderer.create(<App/>).root;
//
//    var sut = TestRenderer.create(<App/>).root;
//
//    sut.changeActivePage(newMessage);
//    expect(sut.activePage).toBe(newMessage);
//  })

import { render, screen } from '@testing-library/react';
import  App  from '../App';
//test(`Renders ${App.name} Element`,  () => {
//  render(<App/>);
//
//  const sut = screen.getByRole('brr', {name:""});
//
//  expect(sut).toBeInTheDocument();
//  }
//)

test(`When call 'changeActivePage' method 'activePage' value should be changed`,  () => {
  const sut = new App();

  const someValue = "whatever";

  const before = sut.activePage;

  sut.changeActivePage(someValue);

  const after = sut.activePage;
  //const sut = screen.getByRole('brr', {name:""});

  expect(after).not.toBe(before);
  expect(after).toBe(someValue);
  }
)