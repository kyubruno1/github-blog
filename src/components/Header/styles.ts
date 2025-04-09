import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  /* max-width: 1440px; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme["base-profile"]};
  height: 10rem;
  margin: 0 auto;
`