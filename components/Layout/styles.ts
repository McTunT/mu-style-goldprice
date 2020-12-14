import styled from 'styled-components'

export const LayoutApp = styled.div`
  .text-head {
    :hover {
      color: #dd3333;
    }
  }

  .button-switch {
    border: none;
    background: transparent;
    cursor: pointer;
    outline: 0;
    transition: opacity 0.25s ease 0s;
    transform: scale(1);
  }

  .Capa_1:hover,
  .Capa_1:focus {
    fill: red;
    stroke: red;
  }
  .app {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px;
  }

  @media (max-width: 640px) {
    .text-head {
      font-size: 14px;
    }
  }
`
