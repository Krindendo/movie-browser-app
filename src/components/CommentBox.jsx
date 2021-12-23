import Box from "./Box"
import styled from "styled-components"
import { formatDate } from "helper/formatDate"

export default function CommentBox({ comment }) {
  if (comment) {
    return (
      <StyledBox>
        <Text>{formatDate(new Date(comment.date))}</Text>
        <Text>{comment.name}</Text>
        <SubText>{comment.text}</SubText>
      </StyledBox>
    )
  }
  return <></>
}

const StyledBox = styled(Box)`
  width: 275px;
`
const Text = styled.p`
  margin: 0;
`
const SubText = styled.p`
  margin: 0;
  font-weight: 600;
`
