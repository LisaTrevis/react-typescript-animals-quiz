import styled from 'styled-components'

// #fae7c5 bisque lightest
// #ffcc91 khaki lighter
// #ca9736 peru darker

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #fae7c5;
  border-radius: 10px;
  border: 2px solid #ca9736;
  padding: 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`

type ButtonWrapperProps = {
  correct: boolean
  userClicked: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #36a369, #0e6636)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #dd4848, #915656)'
        : 'linear-gradient(90deg, #ca9736, #a7761a)'};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`
