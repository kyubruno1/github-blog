import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";


export interface Issue {
  id: number,
  number: number,
  title: string,
  user: {
    login: string,
  },
  comments: number,
  created_at: string,
  body: string
}

export interface IssueUnit {
  title: string,
  body: string,
}

interface IssueContextType {
  issues: Issue[];
  fetchIssues: (query?: string) => Promise<void>
  fetchIssueUnit: (query?: string) => Promise<void>,
  issueUnit: IssueUnit
}

interface IssueProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {

  const [issues, setIssues] = useState<Issue[]>([]);

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
      number: issue.number,
      title: issue.title,
      user: {
        login: issue.user.login,
      },
      comments: issue.comments,
      created_at: issue.created_at,
      body: issue.body
    }))

    setIssues(issues)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  const [issueUnit, setIssueUnit] = useState<IssueUnit>({
    title: '',
    body: '',
  });

  async function fetchIssueUnit(query?: number) {
    const response = await axios.get(`https://api.github.com/repos/kyubruno1/github-blog/issues/${query}`)

    const issueUnitData: IssueUnit = {
      title: response.data.title,
      body: response.data.body
    }

    setIssueUnit(issueUnitData)

  }


  return (
    <IssuesContext.Provider value={{ issues, fetchIssues, fetchIssueUnit, issueUnit }}>
      {children}
    </IssuesContext.Provider>
  )
}