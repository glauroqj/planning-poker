import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoadingRing = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size.w};
  height: ${props => props.size.h};

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    margin: 8px;
    border: 8px solid ${props => props.theme.color.c_main};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.color.c_main} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`