import styled from "styled-components"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  min-height: calc(100vh - 70px);
  height: 100%;
`
