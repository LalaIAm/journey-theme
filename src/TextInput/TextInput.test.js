import React from 'react';
import ReactDOM from 'react-dom';
import { TextInput } from './TextInput';

const InputWrapper = props => <input {...props} />

it('has a placeholder attribute when rendering', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TextInput placeholder='My Input' />,
        div
    )

    expect(div.querySelector('input[placeholder="My Input"]')).not.toBeNull();

    ReactDOM.unmountComponentAtNode(div);
})