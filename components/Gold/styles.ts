import styled from 'styled-components'

export const Layout = styled.div`
  .gptop {
    margin-top: 3rem;
  }

  .goldpice-mu-style-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
  }

  .goldpice-mu-style {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-shadow: rgb(0 0 0 / 4%) 0px 0px 20px 0px;
    box-shadow: rgb(0 0 0 / 4%) 0px 0px 20px 0px;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.borderEye};
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    line-height: 100%;
    width: 100%;
    min-width: 260px;
    font-size: 12px;
    color: #333;
    cursor: pointer;
    overflow: hidden;
    padding: 15px;
    height: 96px;

    :hover {
      box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px 0px;
    }
  }

  .goldpice-mu-style-detail {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    z-index: 100;
  }

  .chart-mu-style {
    height: 28px;
    width: 86px;
    position: absolute;
    right: -105px;
    top: 50%;
    margin-top: -25px;
  }

  .gold-change-up {
    color: #009f6b;
  }

  .gold-change-down {
    color: rgb(247, 75, 108);
  }

  .c-wd {
    color: ${(props) => props.theme.colors.textColor};
  }

  .container-bg {
    margin: 3.5rem;
  }

  .bg-hv-app {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    border: 1px solid ${(props) => props.theme.colors.borderbox};
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

  @media (max-width: 767px) {
    .gptop {
      margin-top: 0.5rem;
    }
    .c-flex {
      flex-direction: column;
    }

    .goldpice-mu-style {
      margin: 40px 10px 0px 10px;
      width: auto;
    }
  }

  @media (max-width: 400px) {
    .c-wd-gold {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    .goldpice-mu-style {
      margin-left: 20px;
      margin-right: 16px;
      width: auto;
    }
  }
`
