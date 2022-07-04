import TestRenderer from 'react-test-renderer';

import {NavButton} from './NavButton';

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