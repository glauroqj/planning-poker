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
  border: 1px solid #f5f5f5;
  border-radius: 50%;
  max-height: 40px;
  max-width: 40px;

  &:hover {
    cursor: pointer;
  }

  > img {
    height: 100%;
    width: auto;
    max-height: 40px;
    border-radius: 50%;
  }
`

export const NavbarLinkItem = styled.div`
  > a {
    text-decoration: none;
    color: inherit;
  }
`