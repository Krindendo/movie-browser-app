import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Layout from "layout/Layout";
import UpperPart from "./components/UpperPart";
import LowerPart from "./components/LowerPart";
import CommentPart from "./components/CommentPart";
import Loading from "pages/public/Loading";

import useGetMovie from "hooks/movieService/useGetMovie";
import useGetMovieComments from "hooks/movieService/useGetMovieComments";

export default function MoviePages() {
  const [isCommentsChanged, setIsCommentsChanged] = useState(0);
  const { movieId } = useParams();

  const { isLoading: isMovieLoading, error: movieError, data: movie } = useGetMovie(movieId);
  const { isLoading: isCommentsLoading, error: commentsError, data: comments } = useGetMovieComments(movieId);

  const handleChanged = () => {
    setIsCommentsChanged((prevValue) => prevValue + 1);
  };

  if (isMovieLoading || isCommentsLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Container>
        <Content>
          <Wrapper>
            <UpperPart movie={movie} />
          </Wrapper>
        </Content>
        <BottomWrapper>
          <LowerPart movie={movie} />
        </BottomWrapper>
        <BottomWrapperReviews>
          <h3>Recenzije</h3>
        </BottomWrapperReviews>
        <BottomWrapperReviews>
          <CommentPart comments={comments} handleChanged={handleChanged} />
        </BottomWrapperReviews>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  background-color: var(--primary-dark-color);
  width: 100%;
  padding: 5em 2em 0 2em;
`;
const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 4em;
`;
const BottomWrapper = styled(Wrapper)`
  flex-direction: row;
  padding: 6rem 12px 3rem;
`;
const BottomWrapperReviews = styled(Wrapper)`
  flex-direction: row;
  padding: 0px 12px;
`;
