import { ImageProfile, ProfileBio, ProfileContainer, ProfileInfo, ProfilePresentation } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare, faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from "react";
import axios from "axios";

export interface ProfileType {
  login: string;
  name: string;
  bio: string;
  company: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
}


export function Profile() {

  const [user, setUser] = useState<ProfileType | null>(null)
  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get('https://api.github.com/users/kyubruno1')
      setUser(response.data)
    }

    fetchUser()
  }, [])


  if (!user) return <p>Loading...</p>

  return (
    <ProfileContainer>
      <ImageProfile src={user.avatar_url} alt="" />
      <div>
        <ProfilePresentation>
          <p>{user.name}</p>
          <span>Github <FontAwesomeIcon icon={faUpRightFromSquare} /></span>
        </ProfilePresentation>
        <ProfileBio>{user.bio}</ProfileBio>
        <ProfileInfo>
          <span><FontAwesomeIcon icon={faGithub} /> {user.login}</span>
          {user.company && <span><FontAwesomeIcon icon={faBuilding} /> {user.company}</span>}
          <span><FontAwesomeIcon icon={faUsers} /> {user.followers} seguidores</span>
        </ProfileInfo>
      </div>


    </ProfileContainer>
  )
}