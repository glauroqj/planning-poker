import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 14rem;
  background-color: ${props => props.theme.color.c_light};
  color: ${props => props.theme.color.c_secondary_dark};
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  overflow: none;
  box-shadow: 0 2px 8px 10px rgba(0,0,0,0.2);
  padding: 10px 0px;
  transition: margin .5s ease;
  margin-left: ${props => props.isVisible ? '0':'-15rem'};

  > h4 {
    font-size: ${props => props.theme.typography.fontSize[18]};
    border-bottom: 1px solid #eee;
    padding: 15px 5px;
  }
  // 640px
  @media( max-width: ${props => props.theme.breakpoint.xs} ) {
    width: 6.5rem;
    font-size: 0.65rem;
    margin-left: 0;
  }
`

export const SidebarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  > a {
    color: ${props => props.theme.color.c_main};
    text-decoration: none;
    transition: background-color .3s ease;
    display:block;
    border-bottom: 1px solid ${props => props.theme.color.c_gray};

    &:hover {
      background-color: ${props => props.theme.color.c_gray};
    }
  }
`

export const SidebarItem = styled.li`
  display: flex;
  color: inherit;
  padding: 10px;
  font-size: ${props => props.theme.typography.fontSize[16]};
  text-align: left;

  > span {
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    margin-left: 5px;
  }
`