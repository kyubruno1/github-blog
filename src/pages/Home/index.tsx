import { useContext } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { ContentContainer, FormContainer, HomeContainer } from "./styles";
import { IssuesContext } from "../../context/IssuesContext";
import { SearchForm } from "./Components/SearchForm";

export function Home() {
  const { issue } = useContext(IssuesContext)

  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />

        <FormContainer>
          <div>
            <span>Publicações</span>
            <span>{issue.length} publicações</span>
          </div>
          <SearchForm />
        </FormContainer>

        <ContentContainer>
          {issue.map((iss) => {
            return (
              <Card {...iss} key={iss.id} />
            )
          })}

        </ContentContainer>

      </HomeContainer>
    </>
  )

}