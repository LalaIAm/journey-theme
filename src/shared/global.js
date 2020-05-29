import { createGlobalStyle, css } from 'styled-components';
import { colors, fonts } from './styles';

export const bodyStyles = css`
    font-family: ${fonts.body};
    font-size: ${fonts.size.m}px;
    color: ${colors.neutrals.dark1};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;

   * {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: ${fonts.weight.regular};
        margin: 0;
        padding: 0;
    } 

    button,
    input,
    textarea,
    select {
        outline: none;
        font-family: ${fonts.headline};
    }

    hr {
        border: none;
        border-top: 1px solid ${colors.tea};
        clear: both;
        margin-bottom: 1.25rem;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        ${bodyStyles}
        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
    }
`;