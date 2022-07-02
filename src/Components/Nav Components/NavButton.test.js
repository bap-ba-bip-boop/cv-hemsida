import TestRenderer from 'react-test-renderer';
import {unmountComponentAtNode } from "react-dom";

import {NavButton} from './NavButton';

//let container = null;
//beforeEach(() => {
//  // setup a DOM element as a render target
//  container = document.createElement("div");
//  document.body.appendChild(container);
//});
//
//afterEach(() => {
//  // cleanup on exiting
//  unmountComponentAtNode(container);
//  container.remove();
//  container = null;
//});
//
it(`When click on ${NavButton.toString()} Event triggers`, () => {
    var buttonText = "whatever";
    const mockcallback = jest.fn();

    var root = TestRenderer.create(<NavButton
    buttonAction = {mockcallback}
    buttonText = {buttonText}
    />).root;

    var sut = root.children[0];
    expect(sut).toBeDefined();

    const eventMock = { preventDefault: mockcallback};
    sut.props.onClick(eventMock);
    
    expect(mockcallback).toHaveBeenCalledTimes(1);
}
)