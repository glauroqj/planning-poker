import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeContainerBody = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
`

export const HomeForm = styled.div`
  display: flex;
  max-width: 320px;
  width: 100%;
  flex-flow: column;

  > svg {
    width: 100%;
    height: auto;
  }
`

export const HomeLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;

  > svg {
    width: 100%;
    height: auto;
    margin-bottom: 15px; 
  }
`