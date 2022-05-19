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

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleGenre = (event) => {
    setGenre(event.target.value);
  };
  const handleRating = (event) => {
    setRating(event.target.value);
  };
  const handleOrderBy = (event) => {
    setOrderBy(event.target.value);
  };

  const output = useRef({ input: "", rating: "", titleSort: "", releasedSort: "" });

  const {
    isLoading,
    error,
    data: movies,
    isFetching,
    refetch
  } = useGetMovies(output.current.input, output.current.rating, output.current.titleSort, output.current.releasedSort);

  const handleSubmit = () => {
    output.current.input = input;
    output.current.genre = genre;
    output.current.rating = rating;

    if (orderBy === "najnoviji") {
      output.current.releasedSort = "desc";
    }
    if (orderBy === "najstariji") {
      output.current.releasedSort = "asc";
    }
    if (orderBy === "abecedno") {
      output.current.titleSort = "asc";
    }
    if (rating === "default") {
      output.current.rating = "";
    }
    if (genre === "default") {
      output.current.genre = "";
    }
    refetch();
  };

  useEffect(() => {
    if (query.get("title")) {
      setInput(query.get("title"));
    }
  }, [query]);

  useEffect(() => {
    refetch();
  }, []);

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

// useEffect(() => {
//   const fetchData = async () => {
//     let data;
//     if (submitedValue) {
//       data = await movieService.getAllMovies(
//         submitedValue.title,
//         submitedValue.rating,
//         submitedValue.titleSort,
//         submitedValue.releasedSort,
//         submitedValue.skip
//       );
//     } else if (query.get("title")) {
//       data = await movieService.getAllMovies(query.get("title"), "", "", "desc");
//     } else {
//       data = await movieService.getAllMovies("", "", "", "desc");
//     }
//     if (data) {
//       setMovies(data);
//     }
//   };
//   fetchData();
// }, [query, submitedValue]);
