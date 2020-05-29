import React from 'react';
import { TextInput } from './TextInput';

export default {
    title: 'Text Input',
    parameters: {
        component: TextInput,
        componentSubtitle: 'Captures user input'
    }
}

export const standardTextInput = () => (
    <div>
        <TextInput placeholder='Your Placeholder' />
        <TextInput placeholder='Disabled Input' disabled={true} />
        <TextInput placeholder='Error Input' error={true} />
    </div>
)
