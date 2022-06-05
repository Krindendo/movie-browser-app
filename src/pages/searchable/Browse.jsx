import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Layout from "layout/Layout";
import SearchInput from "components/SearchInput";
import ListOfMovies from "components/ListOfMovies";
import useRouterQuery from "hooks/useRouteQuery";

import useGetMovies from "hooks/movieService/useGetMovies";

export default function Browse() {
  let query = useRouterQuery();

  const [input, setInput] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const output = useRef({ input: "", rating: "", titleSort: "", releasedSort: "" });

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
    output.current.input = value;
  };
  const handleGenre = (event) => {
    const value = event.target.value;
    setGenre(value);
    output.current.genre = value;
    if (value === "default") {
      output.current.genre = "";
    }
  };
  const handleRating = (event) => {
    const value = event.target.value;
    setRating(value);
    output.current.rating = value;
    if (value === "default") {
      output.current.rating = "";
    }
  };
  const handleOrderBy = (event) => {
    const value = event.target.value;
    setOrderBy(value);
    if (value === "najnoviji") {
      output.current.releasedSort = "desc";
    }
    if (value === "najstariji") {
      output.current.releasedSort = "asc";
    }
    if (value === "abecedno") {
      output.current.titleSort = "asc";
    }
  };

  const {
    isLoading,
    error,
    data: movies,
    isFetching,
    refetch
  } = useGetMovies({
    title: output.current.input,
    rating: output.current.rating,
    titleSort: output.current.titleSort,
    releasedSort: output.current.releasedSort
  });

  const handleSubmit = () => {
    refetch();
  };

  useEffect(() => {
    async function fetchData() {
      const queryParam = query.get("title");
      if (queryParam) {
        output.current.input = queryParam;
        await setInput(queryParam);
      }
      refetch();
    }
    fetchData();
  }, [query, refetch]);

  return (
    <Layout>
      <Container>
        <Content>
          <SearchInput
            input={input}
            handleInput={handleInput}
            handleGenre={handleGenre}
            handleRating={handleRating}
            orderBy={orderBy}
            handleOrderBy={handleOrderBy}
            handleSubmit={handleSubmit}
          />
        </Content>
        <MovieList>
          <ListOfMovies movies={movies} />
        </MovieList>
      </Container>
    </Layout>
  );
}

const Container = styled.div``;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-dark-color);
  width: 100%;
  padding: 5em 2em 0 2em;
`;
const MovieList = styled.div`
  display: grid;
  grid-template-columns: 275px 275px 275px 275px 275px;
  grid-template-rows: auto;
  justify-content: space-around;
  max-width: 1600px;
  margin: 3rem auto;
  gap: 2rem;

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
