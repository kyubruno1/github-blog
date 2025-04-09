import styled from "styled-components";


export const PostContentContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  h3{
     color : ${props => props.theme.blue};
     text-decoration: underline;
     font-size: 1rem;
     line-height: 1.6;
     font-weight: 400;
  }
`

export const CodeContent = styled.div`
`