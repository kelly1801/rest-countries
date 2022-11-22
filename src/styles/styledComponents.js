import styled, {css} from "styled-components";

export const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  border-bottom: 1px solid var(--LightInput);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 3.5rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.0532439);
  border: none;
  padding: 0.2rem 0.5rem;
  ${props => props.back && css `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    background: none;
    border: none;
  `}
`
export const GroupButtons = styled.span`
  display: flex;
  gap: 0.5rem;
`
export const Main = styled.main`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  padding: 1rem 3rem;
  height: calc(100vh - 3.5rem);
  overflow-y: scroll;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlagsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 26%);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 2rem 0;
  width: 100%;
  @media (max-width: 465px) {
    grid-template-columns: repeat(1, 100%);
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  min-width: 400px;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 0.2rem;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.0532439);

  input {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.text};
    width: 100%;
    ::placeholder {
      color: ${(props) => props.theme.text};
    }
  }
`;

export const FilterContainer = styled.details`
  color: ${(props) => props.theme.text};
  background-color: transparent;
  font-size: 14px;
  position: relative;
  div {
    background-color: ${(props) => props.theme.elements};
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 0.8rem;
    position: absolute;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.0532439);
    option {
      margin: 0.2rem 0;
      cursor: pointer;
    }
  }
`;
export const FilterHeader = styled.summary`
  display: flex;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  margin: 0.5rem 0;
  width: 100%;
  border-radius: 5px;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.0532439);
`;
export const CountryContainer = styled.figure`
  max-width: 200px;
  max-height: 250px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.0532439);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    object-fit: cover;
    height: 50%;
    border-radius: 5px;
  }

  @media (max-width: 465px) {
    width: 100%;
    max-width: none;
  }
`;
export const CountryDescription = styled.figcaption`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  height: 50%;
  width: 100%;
  top: 2px;

  margin-top: -0.2rem;

  h3 {
    font-size: 1rem;
  }
  font-size: 0.8rem;
`;

export const DetailsContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
 
  figure {
    width: 50%;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    
    }
    
  }


  @media (max-width: 414px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    figure {
      width: 100%;
    }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 50%;
  h1 {
    font-size: 20px;
  }
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 0.2rem;
    padding: 2rem 0;
  }

  @media (max-width: 414px) {
    width: 100%;
    padding: 0.5rem 0;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`