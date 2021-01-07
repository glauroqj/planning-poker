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
  width: 100%;
  justify-content: center;
  align-items: center;
`

/** BOARD */

export const BoardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`
export const BoardTaskNameSection = styled.div`
  display: flex;
  flex-flow: column;
  width: 30%;
`
export const BoardTaskNameTitle = styled.h4`
  padding: 10px;
  text-align: center;
`
export const BoardTaskNameBody = styled.div`
  display: flex;
  flex-flow: column;
`
export const BoardSection = styled.div`
  display: flex;
  flex-flow: column;
  width: 70%;
`

export const BoardTitle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  padding: 10px;

  b {
    font-weight: 700;
    color: #7befb2;
  }
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
export const BoardCardButtonRevealVote = styled.div`
  margin: 5px 0;

  > div {
    margin: 5px 0;
  }
`