import styled from "styled-components";


export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 0.75rem;

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: top;

    span:first-child {
      color: ${props => props.theme["base-subtitle"]};
      font-weight: bold;
      font-size: 1.12rem;
    }

    span {
      color: ${props => props.theme["base-span"]};
      font-size: 0.875;
    }

  }
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

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  display: grid;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(416px, 1fr));
  gap: 2rem;
`