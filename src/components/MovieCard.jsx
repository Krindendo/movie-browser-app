import styled from "styled-components"
import { useHistory } from "react-router-dom"

export default function MovieCard({ id, title, subtitle, year }) {
  let history = useHistory()
  const handleClicked = () => {
    history.push(`/movie/${id}`)
  }
  return (
    <Box onClick={handleClicked}>
      {title && <Title>{title}</Title>}
      {year && <Date>{year}</Date>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  overflow: hidden;
  padding: 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 1px solid #ff4c29;
  }
`
const Title = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`
const Date = styled.p`
  margin: 0;
`
const SubTitle = styled.p`
  margin: 2px 2px 1rem 2px;
  font-size: 0.95rem;
  color: rgb(110 110 110);
`
