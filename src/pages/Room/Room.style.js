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

  // 1100px
  @media ( max-width: ${props => props.theme.breakpoint.md } ) {

  }

  // 830px
  @media( max-width: ${props => props.theme.breakpoint.sm} ) {
    flex-flow: column wrap;
  }

  // 640px
  @media( max-width: ${props => props.theme.breakpoint.xs} ) {
    
  }
`
/** SIDEBAR */
export const BoardTaskNameSection = styled.div`
  display: flex;
  flex-flow: column;
  width: 30%;
  max-width: 380px;
  transition: margin-left .3s ease-in-out;
  margin-left: ${props => props.isVisible ? 0 : -380}px;
  overflow-y: auto;
  height: calc(100vh - 48px);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  // 1100px
  @media ( max-width: ${props => props.theme.breakpoint.md } ) {

  }

  // 830px
  @media( max-width: ${props => props.theme.breakpoint.sm} ) {
    max-width: 231px;
    margin-left: ${props => props.isVisible ? 0 : -231}px;
  }

  // 640px
  @media( max-width: ${props => props.theme.breakpoint.xs} ) {
    width: 100%;
    max-width: 100%;
    height: 145px;
  }
`
export const BoardTaskNameTitle = styled.h4`
  padding: 10px;
  text-align: center;
`
export const BoardTaskNameBody = styled.div`
  display: flex;
  flex-flow: column;

  ul {
    display: flex;
    flex-flow: column;

    li {
      padding: 8px 10px;
      border-top: 1px solid #eee;
    }
  }

  // 640px
  @media( max-width: ${props => props.theme.breakpoint.xs} ) {
    ul {
      display: flex;
      flex-flow: row;
      overflow-x: scroll;
      width: 100%;
      border-bottom: 1px solid #eee;

      li {

      }
    }
  }
`
export const BoardTaskNameList = styled.li`
`
export const TaskName = styled.div`
  font-size: 14px;
  font-weight: ${props=> props.theme.typography.fontWeight.bold};
  padding-bottom: 5px;

  span {
    font-size: 10px;
    font-weight: ${props=> props.theme.typography.fontWeight.normal};
  }
`
export const TaskInformation = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`
export const TaskAverage = styled.div`
  font-size: 14px;
  font-weight: ${props=> props.theme.typography.fontWeight.medium};

  span {
    font-size: 10px;
    font-weight: ${props=> props.theme.typography.fontWeight.normal};
  }
`
export const TaskDate = styled.div`
  font-size: 10px;
  font-weight: ${props=> props.theme.typography.fontWeight.normal};
`
/** BOARD */
export const BoardSection = styled.div`
  display: flex;
  flex-flow: column;
  transition: width .3s ease-in-out;
  width: ${props => props.hasSidebar ? 70: 100}%;
  align-items: center;

  // 640px
  @media( max-width: ${props => props.theme.breakpoint.xs} ) {
    width: 100%;
  }
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