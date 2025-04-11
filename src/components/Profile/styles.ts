import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 54rem;
  background: ${props => props.theme["base-profile"]};
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  transform: translateY(-35%);

  display: flex;
  padding: 2rem;

  gap: 2rem;
`

export const ImageProfile = styled.img`
  border-radius: 8px; 
  width: 9.25rem;
  height: 9.25rem;
`

export const ProfilePresentation = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${props => props.theme["base-title"]};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }

  span {
    color: ${props => props.theme["blue"]};
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;


    &:hover {
     border-bottom: 1px solid ${props => props.theme["blue"]};

    }
  }
`

export const ProfileBio = styled.p`
  margin: 0.5rem 0 2rem 0;
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${props => props.theme["base-subtitle"]};

  span > svg {
    color: ${props => props.theme["base-label"]};

  }

`