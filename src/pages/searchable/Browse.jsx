import { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "layout/Layout"
import SearchInput from "components/SearchInput"
import ListOfMovies from "components/ListOfMovies"
import { movieService } from "services/movie.service"

export default function Browse() {
  const [movies, setMovies] = useState([])
  const [submitedValue, setSubmitedValue] = useState()

  useEffect(() => {
    const fetchData = async () => {
      let data
      if (submitedValue) {
        data = await movieService.getAllMovies(
          submitedValue.title,
          submitedValue.rating,
          submitedValue.titleSort,
          submitedValue.releasedSort,
          submitedValue.skip
        )
      } else {
        data = await movieService.getAllMovies("", "", "", "desc")
      }

      if (data) {
        setMovies(data)
      }
    }
    fetchData()
  }, [submitedValue])

  const getSubmitedValue = (value) => {
    setSubmitedValue(value)
  }

  return (
    <Layout>
      <Container>
        <Content>
          <SearchInput getSubmitedValue={getSubmitedValue} />
        </Content>
        <MovieList>
          <ListOfMovies movies={movies} />
        </MovieList>
      </Container>
    </Layout>
  )
}

const Container = styled.div``
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-dark-color);
  width: 100%;
  padding: 5em 2em 0 2em;
`
const MovieList = styled.div`
  display: grid;
  grid-template-columns: 275px 275px 275px 275px 275px;
  grid-template-rows: auto;
  justify-content: space-around;
  max-width: 1600px;
  margin: 3rem auto;
  gap: 2rem;
`
