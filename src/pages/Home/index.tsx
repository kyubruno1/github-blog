import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />


        <Card />

      </HomeContainer>
    </>
  )

}