import styled from 'styled-components'

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RoomContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`

/** BOARD */

export const BoardContainer = styled.div`
  display: flex;
  flex-flow: column;
`
export const BoardTitle = styled.div`
  margin-bottom: 15px;
  padding: 10px;
`
export const BoardButtonValues = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 10px;
  flex-flow: row wrap;
`

export const BoardMembers = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  max-width: 660px;
  flex-flow: row wrap;

  // 1100px
  @media ( max-width: ${props => props.theme.breakpoint.md } ) {

  }

  // 830px
  @media( max-width: ${props => props.theme.breakpoint.sm} ) {

  }

  // 640px
  @media( max-width: ${props => props.theme.breakpoint.xs} ) {
    max-width: 320px;
  }
`
export const BoardCard = styled.div`
  padding: 15px;
  max-width: 190px;
  width: 100%;
  flex: 1 1 25%;
`
export const BoardMembersImage = styled.div`
  display: flex;
  justify-content: center;
  min-height: 96px;

  > img {
    border-radius: 50%;
  }
`