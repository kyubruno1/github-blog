import { HeaderContainer } from "./styles";
import blogLogo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={blogLogo} alt="" />
    </HeaderContainer>

  )
}