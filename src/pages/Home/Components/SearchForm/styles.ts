import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;

  input {
    width: 100%;
    background: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 6px;
    color: ${props => props.theme["base-label"]};
    padding: 1rem;
    height: 3.125rem;

    &:focus {
      outline: 1px solid ${props => props.theme["blue"]};
      color: ${props => props.theme["base-text"]};
    }
  }
  
    
`