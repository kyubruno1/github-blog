import { Issue } from "../../context/IssuesContext";
import { CardContainer } from "./styles";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'


export function Card(data: Issue) {

  const createdAt = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
    locale: ptBR
  })


  function handleClick() {
    console.log('click')
  }

  return (
    <CardContainer onClick={handleClick}>
      <div>
        <h3>{data.title}</h3>
        <span>{createdAt}</span>
      </div>
      <p>{data.body}</p>
    </CardContainer>
  )
}