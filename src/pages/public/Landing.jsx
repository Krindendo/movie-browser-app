import useGetMovies from "hooks/movieService/useGetMovies.js";
import styled from "styled-components";
import Layout from "layout/Layout";
import ListOfMovies from "components/ListOfMovies";
import undrawSvg from "assets/svg/undraw_horror_movie_3988.svg";
import ListOfMoviesSkeleton from "components/Skeletons/ListOfMoviesSkeleton";

export default function Landing() {
  const { isLoading, error, data: movies } = useGetMovies({ enabled: true });
  return (
    <Layout>
      <Container>
        <UpperPart>
          <LeftPart>
            <Title>Svi domaći filmovi na jednom mestu</Title>
            <Subtitle>Pretražujte domaće filmove brzo, lako i jednostavno</Subtitle>
          </LeftPart>
          <RightPart>
            <Image src={undrawSvg} alt="undraw horror movie" />
          </RightPart>
        </UpperPart>
        <FilmTitle>Najpopularniji filmovi:</FilmTitle>
        <FilmContainer>{isLoading ? <ListOfMoviesSkeleton /> : <ListOfMovies movies={movies} />}</FilmContainer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  padding: 2em;
`;
const UpperPart = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: 1010px) {
    flex-direction: column;
    gap: 3rem;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 0;
  }
`;
const LeftPart = styled.div`
  width: 40%;

  @media only screen and (max-width: 1010px) {
    width: 70%;
  }
`;
const RightPart = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 1010px) {
    width: 100%;
    justify-content: center;
  }
`;
const Image = styled.img`
  max-width: 500px;

  @media only screen and (max-width: 1010px) {
    max-width: 500px;
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 0.5em 0;
  line-height: 1;
  width: 16ch;

  @media only screen and (max-width: 1010px) {
    text-align: center;
    margin: 0 auto 0.5em auto;
    max-width: 16ch;
    width: initial;
  }

  @media only screen and (max-width: 650px) {
    font-size: 2.5rem;
  }
`;
const Subtitle = styled.h3`
  margin: 0;
  @media only screen and (max-width: 1010px) {
    text-align: center;
  }
`;
const FilmTitle = styled.h3`
  width: 100%;
  max-width: 1570px;
  margin: 1rem auto;
  margin-top: 5rem;
`;
const FilmContainer = styled.section`
  display: grid;
  grid-template-columns: 275px 275px 275px 275px 275px;
  grid-template-rows: auto;
  justify-content: space-around;
  max-width: 1600px;
  margin: 0 auto 3rem auto;
  row-gap: 2rem;

  @media only screen and (max-width: 1500px) {
    grid-template-columns: 275px 275px 275px 275px;
  }
  @media only screen and (max-width: 1250px) {
    grid-template-columns: 275px 275px 275px;
  }
  @media only screen and (max-width: 940px) {
    grid-template-columns: 275px 275px;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 275px;
  }
`;
