import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Box from "components/Box";

export default function MovieCard({ id, title, subtitle, year }) {
  let history = useHistory();
  const handleClicked = () => {
    history.push(`/movie/${id}`);
  };
  return (
    <Box onClick={handleClicked}>
      {title && <Title>{title}</Title>}
      {year && <Date>{year}</Date>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Box>
  );
}

const Title = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`;
const Date = styled.p`
  margin: 0;
`;
const SubTitle = styled.p`
  margin: 2px 2px 1rem 2px;
  font-size: 0.95rem;
  color: rgb(110 110 110);
`;
