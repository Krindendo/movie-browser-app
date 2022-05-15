import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <Container>
      <Text>Učitavanje </Text>
      <CircularProgress size="1.5rem" />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e9e9e9;
  gap: 1rem;
`;
const Text = styled.p`
  font-size: 1.5rem;
`;
