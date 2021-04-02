import styled, { createGlobalStyle } from 'styled-components'
import bgimage from './images/nature_background.jpg'

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${bgimage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0 0 20px 0;
  }

  h1 {
    font-family: 'Chango', sans-serif;
    background-image: linear-gradient(180deg, #fff, #de9c3a);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-fill-color: transparent;
    filter: drop-shadow(2px 2px #ca9736);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #ca9736;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 0 0 20px;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`
