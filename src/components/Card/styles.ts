import styled from "styled-components";


export const CardContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background: ${props => props.theme["base-post"]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  border: 2px solid transparent;
  

  div {
    width: 100%;
    display: flex;
    align-items: space-between;
    gap: 1rem;
    justify-content: space-between;
  }

  h3 {
    color: ${props => props.theme["base-title"]};
    font-size: 1.25rem;
  }

  span {
    color: ${props => props.theme["base-span"]};
    font-size: 0.875rem;
  }

  p {
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  }

  &:hover {
    border: 2px solid ${props => props.theme["base-label"]};
  }

`