import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { ContentContainer, FormContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />

        <FormContainer>
          <div>
            <span>Publicações</span>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </FormContainer>

        <ContentContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </ContentContainer>

      </HomeContainer>
    </>
  )

}