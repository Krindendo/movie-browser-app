import styled from "styled-components"

export default function Loading() {
  return (
    <Container>
      <Text>Očitavanje ...</Text>
      {/* <i class="fas fa-spinner"></i> */}
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e9e9e9;
`
const Text = styled.p``
