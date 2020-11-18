import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeButtonContainer = styled.div`
  position: fixed;
  z-index: 9;
  top: ${props => props.show ? "10%" : "-90px"};
  transition: top 0.8s ease;
`