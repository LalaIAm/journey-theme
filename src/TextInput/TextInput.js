import React from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, spacing } from '../shared/styles';
import { PropTypes } from 'prop-types';



const Input = styled.input`
	width: 36rem;
	height: 2.5rem;
	font-family: ${fonts.body};
	font-size: 1.275rem;
	color: ${colors.dirtBrown};
	outline: none;
    border: none;
    border-radius: ${spacing.borderRadius.regular}px;
    box-shadow: 0 1px 2px 1px rgba(0,0,0,0.23);
    margin: 1rem;
    padding: .5rem;

	&:active {
		border: 0.5px solid ${colors.tea};
	}

	${(props) =>
        props.disabled &&
        `
    cursor: not-allowed !important;
    opacity: 0.5;
    color: ${colors.neutrals.dark3};
    background-color: ${colors.neutrals.dark5}`
    }

    ${props => props.error && 
    `
        background-color: ${colors.semantic.danger};
        opacity: .5;
        color: ${colors.neutrals.dark2};`
       
       }

    
`;

/**
- Use the Text Input for capturing user input in forms
- Should be used with a darker background.
 */

const TextInput = ({ isDisabled, hasError, placeholder, ...props }) => (
	<Input placeholder={placeholder} disabled={isDisabled} error={hasError} {...props} />
)

TextInput.propTypes = {
    /**
     User placeholder to give the user guidance - especially when not using labels.
     */
    placeholder: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    error: PropTypes.bool
}

TextInput.defaultProps = {
    disabled: false
}

export { TextInput };
