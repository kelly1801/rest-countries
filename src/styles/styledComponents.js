import styled, {css} from 'styled-components'

export const NavContainer = styled.nav`

  background-color:${props => props.theme.elements} ;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

  }
`