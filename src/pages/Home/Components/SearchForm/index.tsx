import { useContext } from "react";
import { IssuesContext } from "../../../../context/IssuesContext";
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

//Crio o esquema de validação para o formulário
const searchFormSchema = zod.object({
  query: zod.string(),
})

//Crio um tipo para poder tipar o formulario
type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssues } = useContext(IssuesContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    //passo o objeto de configuração do zod resolver a validação
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearch(data: SearchFormInputs) {

    console.log(data.query)

    await fetchIssues(data.query)
  }

  return (
    //react-hook-form espera que vc use a handleSubmit dele para lidar com o submit e validação,
    //onSubmit={handleSubmit(handleSearch)} significa:
    //“Quando o formulário for enviado, valide com o zod, e se estiver tudo certo, execute a função handleSearch com os dados.”
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>

  )
}