import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { CodeContent, PostContentContainer } from "./styles";
import { useParams } from 'react-router-dom'
import { IssuesContext } from "../../context/IssuesContext";
import ReactMarkdown from 'react-markdown'

export function Post() {

  const { issueNumber } = useParams()

  const { fetchIssueUnit, issueUnit } = useContext(IssuesContext)

  useEffect(() => {
    fetchIssueUnit(issueNumber)
  }, [fetchIssueUnit, issueNumber])


  return (
    <div>
      <Header />

      <Profile />

      <PostContentContainer>
        <ReactMarkdown>{issueUnit.body}</ReactMarkdown>
        {/* <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
        <p>.</p>
        <h3>Dynamic typing</h3>
        <p>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</p>

        <CodeContent>
          let foo = 42;   // foo is now a number
          foo = ‘bar’;    // foo is now a string
          foo = true;     // foo is now a boolean
        </CodeContent> */}
      </PostContentContainer>

    </div>



  )

}