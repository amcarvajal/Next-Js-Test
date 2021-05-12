import css from 'styled-jsx/css'

import {breakpoints, colors, fonts} from '../../styles/theme'
import {addOpacityToColor} from '../../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image:
      radial-gradient(${backgroundColor} 1.5px, #fdfdfd 2px),
      radial-gradient(${backgroundColor} 2px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    height: 800px;

  }
  ::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: yellow;
  border-radius: 10px;
}


  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
    height: 100%;
    width: 100%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
      transition: 2s;
    }

    main:hover {
    animation-name: happyBox;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transition: 1s;
    }

    @keyframes happyBox {
      0%{
        transition: 1s;
      }
      50%{
        transform: translateY(5rem);
      }
      100%{
        transform: translateY(0);
        transition: 1s;
      }
    }


  }`