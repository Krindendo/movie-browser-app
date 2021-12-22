import { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { movieService } from "services/movie.service"

import Layout from "layout/Layout"
import UpperPart from "./components/UpperPart"
import LowerPart from "./components/LowerPart"
import CommentPart from "./components/CommentPart"

export default function MoviePages() {
  const [movie, setMovie] = useState()
  const [comments, setComments] = useState()
  const { titleId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const movie = await movieService.getSingleMovie(titleId)
      const comments = await movieService.getSingleMovieComments(titleId)
      if (movie) {
        setMovie(movie)
      }
      if (comments) {
        setComments(comments)
      }
    }
    fetchData()
  }, [titleId])

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
          <BottomWrapper>
            <CommentPart comments={comments} />
          </BottomWrapper>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <div>
        <p>Film nije pronadjen</p>
      </div>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6em;
`
const Content = styled.div`
  background-color: var(--primary-dark-color);
  width: 100%;
  padding: 5em 2em 0 2em;
`
const Wrapper = styled.div`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 4em;
`
const BottomWrapper = styled(Wrapper)`
  flex-direction: row;
`
