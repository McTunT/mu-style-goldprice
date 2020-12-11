import styled from 'styled-components'

export const Layout = styled.div`
  .c-wd {
    color: ${(props) => props.theme.colors.textColor};
  }

  .container-bg {
    margin: 3.5rem;
  }

  .bg-hv-app {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    border: 1px solid  ${(props) => props.theme.colors.borderbox};;
  }

  .bg-theme-mu {
    background-color: #dd3333;
    box-shadow: rgb(221, 51, 51) -4px 9px 25px -6px;
  }

  .font-nb {
    font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
      Noto Color Emoji;
  }

  @media (max-width: 640px) {
    .bg-hv-app {
      padding: 0.8rem;
    }

    .container-bg {
      margin: 1rem;
    }

    .ct-mb {
      font-size: 12px;
      font-weight: 600;
    }

    .mb-gold {
      font-size: 16px;
    }

    .mb-goldsmith {
      font-size: 18px;
      margin-left: 0px;
      font-weight: 700;
    }
  }
`
