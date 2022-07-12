import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LowerPart({ movie }) {
  if (!movie) {
    return <></>;
  }

  return (
    <>
      <Fullplot>{movie.fullplot}</Fullplot>
      <GroupOfPeoples>
        <div>
          <Title>Producent:</Title>
          <Text>{movie.directors[0]}</Text>
        </div>
        <div>
          <Title>Glumci:</Title>
          <List>
            {movie.actors.map((actor) => (
              <Item key={actor.actor_id}>
                <TextInLink to={`/actor/${actor.actor_id}`}>{actor.name}</TextInLink>
              </Item>
            ))}
          </List>
        </div>
      </GroupOfPeoples>
    </>
  );
}

const Fullplot = styled.p`
  width: 50%;
  margin: 0;
  line-height: 2;

  &::first-letter {
    margin-left: 1.5rem;
    font-size: 1.2rem;
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: justify;
  }
`;

const GroupOfPeoples = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  gap: 4em;
  @media only screen and (max-width: 768px) {
    width: 100%;
    gap: 2rem;
  }
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0;
  letter-spacing: 1px;
`;
const Text = styled.p`
  color: var(--secundary-link-color);
  font-weight: 500;
`;
const TextInLink = styled(Link)`
  color: var(--secundary-link-color);
  font-weight: 500;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const Item = styled.li`
  margin: 0.5em 0;
`;
