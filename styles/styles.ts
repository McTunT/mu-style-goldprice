import styled from 'styled-components'

const Layout = styled.div`
  .layout {
    align-self: flex-start;
    margin-top: -4px;
    flex-shrink: 0;
    transition-duration: 350ms;
    transition-timing-function: initial;
    transition-delay: initial;
    transition-property: opacity;
    color: ${(props) => props.theme.colors.textLookBack};
  }

  .text-lookback {
    font-family: Graphik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
    transition-property: color;

    :hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.textHLookBack};
    }

    .selected {
      background-color: #dd3333;
    }
  }
`

export default Layout
