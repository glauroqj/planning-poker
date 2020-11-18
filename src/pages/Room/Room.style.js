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
  height: 90vh;
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
`
export const BoardButtonValues = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const BoardMembers = styled.div`
  display: flex;
  width: 100%;
`
export const BoardCard = styled.div`
  padding: 15px;
  max-width: 180px;
  width: 100%;
`
export const BoardMembersImage = styled.div`
  display: flex;
  justify-content: center;
  min-height: 96px;

  > img {
    border-radius: 50%;
  }
`