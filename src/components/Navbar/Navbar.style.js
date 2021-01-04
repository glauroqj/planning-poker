import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  > a {
    text-decoration: none;
    color: inherit;
  }
`
export const NavbarUser = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }

  > img {
    height: 100%;
    width: auto;
  }
`

export const NavbarLinkItem = styled.div`
  > a {
    text-decoration: none;
    color: inherit;
  }
`