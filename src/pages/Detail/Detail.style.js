import styled from 'styled-components'

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

export const DetailContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: ${props => props.theme.space[16]};
`

export const DetailList = styled.div`
  display: flex;
  flex-flow: column;
  border: 1px solid ${props => props.theme.color.c_gray};
  border-radius: 8px;
  
  > h2 {
    font-size: ${props => props.theme.typography.fontSize[32]};
    margin-bottom: 15px;
    padding: ${props => props.theme.space[16]};
  }
`

export const DetailListItem = styled.div`
  padding: ${props => props.theme.space[16]};
  border-bottom: 1px solid ${props => props.theme.color.c_gray};

  &:last-child {
    border-bottom: none;
  }

  > b {
    font-weight: ${props => props.theme.typography.fontWeight.bold};
  }
`