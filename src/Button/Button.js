import React from 'react';
import styled, { css } from 'styled-components';
import { colors, fonts, spacing } from '../shared/styles';
import { darken, rgba } from 'polished';
import { easing } from '../shared/animations';

const Text = styled.span`
	display: inline-block;
	vertical-align: top;
	font-family: ${fonts.headline};
	font-weight: ${fonts.weight.bold};
`;

const APPEARENCE = {
	PRIMARY: 'primary',
	PRIMARY_OUTLINE: 'primaryOutline',
	SECONDARY: 'secondary',
	SECONDARY_OUTLINE: 'secondaryOutline',
	TERTIARY: 'tertiary',
	OUTLINE: 'outline',
};

const SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
};

const Button = styled.button`
   border: 0;
   cursor: pointer;
   display: inline-block;
   overflow: hidden;
   padding: ${(props) =>
			props.size === SIZES.SMALL ? `.25rem 2.5rem` : `.5rem 3rem`};
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: all .3s ease-out;
    transform: translate3d(0,0,0);
    vertical-align: top;
    white-space: nowrap;
    user-select: none;
    opacity: 1;
    margin: 1rem;
    background: transparent;     
    border-radius: 15px;
    box-shadow: 2px 3px 6px 0 rgba(0,0,0,0.24);

    font-size: ${(props) =>
			props.size === SIZES.SMALL ? fonts.size.m : fonts.size.l};
    font-weight: bold;

    ${(props) =>
			!props.isLoading &&
			`
    &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0,0,0,0.2) 0 2px 6px 0;
        background-color: ${colors.mushroom};
    }


    &:active {
        transform: translate3d(0,0,0);
    }

    &:focus {
        box-shadow: ${rgba(colors.tea, 0.4)} 0 1px 9px 2px;
    }

    &:focus:hover {
        box-shadow: ${rgba(colors.tea, 0.2)} 0 8px 18px 0px;
    }
    
    `}

    ${Text}{
        transform: scale3d()(1,1,1) translate3d(0,0,0);
        transition: transform 0.7s ${easing.rubber};
        opacity: 1;
    }

    ${loading}{
        transform: translate3d()(0, 100%, 0);
    }

    ${(props) =>
			props.disabled &&
			`
    cursor: not-allowed !important;
    opacity: 0.5;
    &:hover {
        transform: none;
    }
    `}

    ${(props) =>
			props.isUnclickable &&
			`
    cursor: default !important;
    pointer-events: none;
    &:hover {
        transform: none;
    }
    `}

    ${(props) =>
			props.isLoading &&
			`
    cursor: progress !important;
    opacity: 0.7;

    ${loading}{
        transition: transform 0.7s ${easing.rubber};
        transform: translate3d(0 -50%, 0);
        opacity: 1;

    }

    ${Text}{
        transform: scale3d(0,0,1) translate3d(0, -100%, 0);
        opacity: 0;
    }

    &:hover {
        transform: none;
    }
    `}
${(props) =>
	props.appearance === APPEARANCES.PRIMARY &&
	`
      background: ${colors.uglyPurple};
      color: ${colors.white};
      ${!props.isLoading &&
				`
          &:hover {
            background: ${darken(0.05, colors.mushroom)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(colors.uglyPurple, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(colors.uglyPurple, 0.2)} 0 8px 18px 0px;
          }
        `}
    `}

     ${(props) =>
				props.appearance === APPEARANCES.SECONDARY &&
				`
      background: ${colors.tea};
      color: ${colors.white};
      ${!props.isLoading &&
				`
          &:hover {
            background: ${darken(0.05, colors.mushroom)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(colors.tea, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(colors.tea, 0.2)} 0 8px 18px 0px;
          }
        `}
    `}
  ${(props) =>
		props.appearance === APPEARANCES.TERTIARY &&
		`
      background: ${colors.dirtBrown};
      color: ${colors.white};
      ${!props.isLoading &&
				`
          &:hover {
            background: ${darken(0.05, colors.dirtBrown)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(colors.dirtBrown, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(colors.dirtBrown, 0.2)} 0 8px 18px 0px;
          }
        `}
    `}
  ${(props) =>
		props.appearance === APPEARANCES.OUTLINE &&
		`
      box-shadow: ${colors.neutrals.dark3} 0 0 0 1px inset;
      color: ${colors.neutrals.dark1};
      background: transparent;
      ${!props.isLoading &&
				`
          &:hover {
            box-shadow: ${colors.neutrals.dark3} 0 0 0 1px inset;
          }
          &:active {
            background: ${colors.neutrals.dark3};
            box-shadow: ${colors.neutrals.dark3} 0 0 0 1px inset;
            color: ${colors.neutrals.dark1};
          }
          &:focus {
            box-shadow: ${colors.neutrals.dark3} 0 0 0 1px inset, ${rgba(
					colors.tea,
					0.4
				)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${colors.neutrals.dark3} 0 0 0 1px inset, ${rgba(
					colors.tea,
					0.2
				)} 0 8px 18px 0px;
          }
        `};
    `};
    ${(props) =>
			props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
			`
        box-shadow: ${colors.uglyPurple} 0 0 0 1px inset;
        color: ${colors.uglyPurple};
        &:hover {
          box-shadow: ${colors.uglyPurple} 0 0 0 1px inset;
          background: transparent;
        }
        &:active {
          background: ${colors.uglyPurple};
          box-shadow: ${colors.uglyPurple} 0 0 0 1px inset;
          color: ${colors.neutrals.light};
        }
        &:focus {
          box-shadow: ${colors.uglyPurple} 0 0 0 1px inset, ${rgba(
				colors.uglyPurple,
				0.4
			)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${colors.uglyPurple} 0 0 0 1px inset, ${rgba(
				colors.uglyPurple,
				0.2
			)} 0 8px 18px 0px;
        }
      `};
    ${(props) =>
			props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
			`
        box-shadow: ${colors.tea} 0 0 0 1px inset;
        color: ${colors.tea};
        &:hover {
          box-shadow: ${colors.tea} 0 0 0 1px inset;
          background: transparent;
        }
        &:active {
          background: ${colors.tea};
          box-shadow: ${colors.tea} 0 0 0 1px inset;
          color: ${colors.neutrals.light};
        }
        &:focus {
          box-shadow: ${colors.tea} 0 0 0 1px inset,
            ${rgba(colors.tea, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${colors.tea} 0 0 0 1px inset,
            ${rgba(colors.tea, 0.2)} 0 8px 18px 0px;
        }
      `};
`;

const ButtonLink = StyledButton.withComponent('a');

const applyStyle = (ButtonWrapper) => {
	return (
		ButtonWrapper &&
		StyledButton.withComponent(({ isLoading, isUnclickable, ...rest }) => (
			<ButtonWrapper {...rest} />
		))
	);
};

export function Button({
	isDisabled,
	isLoading,
	loadingText,
	isLink,
	ButtonWrapper,
	...props
}) {
	const buttonInner = (
		<>
			<Text>{children}</Text>
			{isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
		</>
	);

	const StyledButtonWrapper = React.useMemo(() => applyStyle(ButtonWrapper), [
		ButtonWrapper,
	]);

	let SelectedButton = StyledButton;
	if (ButtonWrapper) {
		SelectedButton = StyledButtonWrapper;
	} else if (isLink) {
		SelectedButton = ButtonLink;
	}

	return (
		<SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
			{buttonInner}
		</SelectedButton>
	);
}

Button.propTypes = {
	isLoading: PropTypes.bool,
	/**
     You can apply custom text to a btn that is loading
     */
	loadingText: PropTypes.node,
	/**
    Button text that have hrefs should use <a> instead of <button>
     */
	isLink: PropTypes.bool,
	children: PropTypes.node.isRequired,
	appearence: PropTypes.oneOf(Object.values(APPEARENCE)),
	isDisabled: PropTypes.bool,
	/**
     Prevents users from clicking on a button multiple items (for things like payment forms)
     */
	isUnclickable: PropTypes.bool,
	/**
     Buttons with icons by themselves have a circular shape
     */
	size: PropTypes.oneOf(Object.values(SIZES)),
	ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

Button.defaultProps = {
	isLoading: false,
	loadingText: null,
	isLink: false,
	appearence: APPEARENCES.PRIMARY,
	isDisabled: false,
	isUnclickable: false,
	size: SIZES.SMALL,
	ButtonWrapper: undefined,
};
