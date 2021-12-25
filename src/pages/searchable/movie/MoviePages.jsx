import { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { movieService } from "services/movie.service"

import Layout from "layout/Layout"
import UpperPart from "./components/UpperPart"
import LowerPart from "./components/LowerPart"
import CommentPart from "./components/CommentPart"
import Loading from "pages/public/Loading"

export default function MoviePages() {
  const [isCommentsChanged, setIsCommentsChanged] = useState(0)
  const [movie, setMovie] = useState()
  const [comments, setComments] = useState()
  const { movieId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const movie = await movieService.getSingleMovie(movieId)
      const comments = await movieService.getSingleMovieComments(movieId)
      if (movie) {
        setMovie(movie)
      }
      if (comments) {
        setComments(comments)
      }
    }
    fetchData()
  }, [movieId, isCommentsChanged])

  const handleChanged = () => {
    setIsCommentsChanged((prevValue) => prevValue + 1)
  }

  if (movie) {
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
    )
  }

  return <Loading />
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  background-color: var(--primary-dark-color);
  width: 100%;
  padding: 5em 2em 0 2em;
`
const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 4em;
`
const BottomWrapper = styled(Wrapper)`
  flex-direction: row;
  padding: 6rem 12px 3rem;
`
const BottomWrapperReviews = styled(Wrapper)`
  flex-direction: row;
  padding: 0px 12px;
`
