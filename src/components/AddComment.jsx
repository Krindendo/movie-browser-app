import Box from "./Box"
import styled from "styled-components"

export default function AddComment({ handleOpenDialog }) {
  return (
    <StyledBox onClick={handleOpenDialog}>
      <Text>Napisite komentar</Text>
    </StyledBox>
  )
}

const StyledBox = styled(Box)``
const Text = styled.p``
