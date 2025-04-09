import { ImageProfile, ProfileBio, ProfileContainer, ProfileInfo, ProfilePresentation } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare, faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/Logo.svg'

export function Profile() {
  return (
    /* Separar em duas divs para separar img | texto */
    <ProfileContainer>
      <ImageProfile src={logo} alt="" />
      <div>
        <ProfilePresentation>
          <p>Bruno Ribeiro</p>
          <span>Github <FontAwesomeIcon icon={faUpRightFromSquare} /></span>
        </ProfilePresentation>
        <ProfileBio>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione. Vero atque natus nulla similique, nostrum officia sit veniam facere maiores velit sequi, reiciendis expedita vitae ipsum. Eos, ea saepe.</ProfileBio>
        <ProfileInfo>
          <span><FontAwesomeIcon icon={faGithub} /> github_user</span>
          <span><FontAwesomeIcon icon={faBuilding} /> github_company</span>
          <span><FontAwesomeIcon icon={faUsers} /> github_followers</span>
        </ProfileInfo>
      </div>


    </ProfileContainer>
  )
}