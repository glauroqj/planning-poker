import styled, { css } from 'styled-components'

const sizeOptions = {
  sm: () => css`padding: ${props=> props.theme.space[8]} ${props=> props.theme.space[12]};`,
  md: () => css`padding: ${props=> props.theme.space[12]};`,
  lg: () => css`padding: ${props=> props.theme.space[16]};`
}

const colorOptions = {
  primary: () => css`
    background-color: ${props => props.theme.color.c_main};
    color: ${props => props.theme.color.c_light};
    border-color: ${props => props.theme.color.c_main};
    &:hover {
      border-color: ${props => props.theme.color.c_main_dark};
      background-color: ${props => props.theme.color.c_main_dark};
    }
  `,
  secondary: () => css`
    background-color: ${props => props.theme.color.c_secondary};
    color: ${props => props.theme.color.c_light};
    border-color: ${props => props.theme.color.c_secondary};
    &:hover {
      border-color: ${props => props.theme.color.c_secondary_dark};
      background-color: ${props => props.theme.color.c_secondary_dark};
    }
  `
}

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  padding: 6px 6px;
  font-weight: ${props => props.theme.typography.fontWeight.normal};
  transition: background-color .3s ease, color .3s ease, border-color .3s ease;

  &:hover {
  }
  &:focus {
    outline: 0;
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
    pointer-events: none;
  }

  //color
  ${props => colorOptions[props.color]() }
  //size
  ${props => sizeOptions[props.size]() }
`
export const ButtonLoading = styled.button`
  display: flex;
  pointer-events: none;
  cursor: not-allowed;
  outline: none;
  border: none;
  background-color: transparent;
`