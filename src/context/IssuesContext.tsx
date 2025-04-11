import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";


export interface Issue {
  id: number,
  title: string,
  user: {
    login: string,
  },
  comments: number,
  created_at: string,
  body: string
}

interface IssueContextType {
  issue: Issue[];
  fetchIssues: (query?: string) => Promise<void>
}

interface IssueProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {

  const [issue, setIssue] = useState<Issue[]>([]);

  async function fetchIssues(query?: string) {
    let searchQuery = ''

    if (query && query.trim() !== '') {
      // Se a query for passada, monta com base nela
      searchQuery = `${query} repo:kyubruno1/github-blog`
    } else {
      // Se não for passada, busca todas as issues do repositório
      searchQuery = `repo:kyubruno1/github-blog`
    }

    const response = await axios.get(`https://api.github.com/search/issues?q=${encodeURIComponent(searchQuery)}`)

    const issues = response.data.items.map((issue: Issue) => ({
      id: issue.id,
      title: issue.title,
      user: {
        login: issue.user.login,
      },
      comments: issue.comments,
      created_at: issue.created_at,
      body: issue.body
    }))

    setIssue(issues)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issue, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}