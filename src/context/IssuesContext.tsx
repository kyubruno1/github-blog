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
}

interface IssueProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {

  const [issue, setIssue] = useState<Issue[]>([]);

  async function fetchIssues() {
    const response = await axios.get('https://api.github.com/search/issues?q=author:kyubruno1')

    const issues = response.data.items.map((issue: any) => ({
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
    <IssuesContext.Provider value={{ issue }}>
      {children}
    </IssuesContext.Provider>
  )
}