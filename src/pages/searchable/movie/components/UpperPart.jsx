import styled from "styled-components"
import { Link } from "react-router-dom"

export default function UpperPart({ movie }) {
  return (
    <>
      <Top>
        <Title>{movie.title}</Title>
        <SubTitle>{movie.dateFormated}</SubTitle>
      </Top>
      <Wrapper>
        <List>
          {movie.genres.map((genre, i) => (
            <Genre key={i}>
              <p>{genre}</p>
            </Genre>
          ))}
        </List>
        <ImdbContent>
          <Imdb>
            <div>
              <ImdbRatingUpper>IMDB ocena: </ImdbRatingUpper>
              <ImdbRatingBottom>Ukupno glasova: </ImdbRatingBottom>
            </div>
            <div>
              <ImdbRatingUpper>{movie.imdb.rating}/10</ImdbRatingUpper>
              <ImdbRatingBottom>{movie.imdb.votes}</ImdbRatingBottom>
            </div>
          </Imdb>
          <ImdbLink to={{ pathname: `https://www.imdb.com/title/${movie.imdb.id}` }} target="_blank">
            Link ka IMDB-u
          </ImdbLink>
        </ImdbContent>
      </Wrapper>
    </>
  )
}

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`
const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 3rem;
  line-height: 3.125rem;
  color: var(--white-color);
`
const SubTitle = styled.h4`
  margin: 0;
  color: var(--subTitle-color);
`
const List = styled.ul`
  display: flex;
  gap: 6px;
  list-style-type: none;
  padding: 0;
`

const Genre = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px solid var(--white-color);
  padding: 0.1rem 0.5rem;

  p {
    margin: 0;
    color: var(--white-color);
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
  padding: 0;
  margin: 0 0 8px 0;
`

const ImdbContent = styled.div`
  margin-left: auto;
`
const Imdb = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 7px;
`
const ImdbRatingUpper = styled.p`
  margin: 0;
  color: var(--white-color);
  text-align: start;
  font-size: 1.1rem;
`
const ImdbRatingBottom = styled.p`
  margin: 0;
  color: var(--subTitle-color);
`

const ImdbLink = styled(Link)`
  text-align: end;
  color: var(--primary-link-color);
  font-weight: 500;
`
