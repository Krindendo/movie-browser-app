import { useState, useEffect } from "react"
import styled from "styled-components"
import { styled as muiStyled } from "@mui/material/styles"
import Dropdown from "./Dropdown"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import useRouterQuery from "hooks/useRouteQuery"

export default function SearchInput(props) {
  const { getSubmitedValue } = props
  let query = useRouterQuery()
  const [values, setValues] = useState({ input: "", genre: "", rating: "", orderBy: orderByList[0].value })

  const submitValue = (e) => {
    const { name, value } = e.target
    setValues((inputs) => ({ ...inputs, [name]: value }))
  }

  const handleSubmit = () => {
    let { input, genre, rating, orderBy } = values
    let titleSort, releasedSort
    if (orderBy === "najnoviji") {
      releasedSort = "desc"
    }
    if (orderBy === "najstariji") {
      releasedSort = "asc"
    }
    if (orderBy === "abecedno") {
      titleSort = "asc"
    }
    if (rating === "default") {
      rating = ""
    }
    if (genre === "default") {
      genre = ""
    }
    getSubmitedValue({ title: input, rating: rating, titleSort, releasedSort, skip: null })
  }

  useEffect(() => {
    let title = query.get("title")
    if (title) {
      setValues((inputs) => ({ ...inputs, input: title }))
    }
  }, [query])

  return (
    <Container>
      <Title>Pretraga</Title>
      <UpperPart>
        <TextFieldStyled
          value={values.input}
          onChange={submitValue}
          name="input"
          color="secondary"
          variant="outlined"
          size="small"
          inputProps={{ style: { color: "white", height: "25px" } }}
          fullWidth
        />
        <Button color="secondary" variant="contained" size="large" sx={{ my: 1, mx: 1.5 }} onClick={handleSubmit}>
          Pretraga
        </Button>
      </UpperPart>
      <BottomPart>
        <Dropdown
          id="genre"
          title="Žanr"
          list={genreList}
          color="secondary"
          styled={{ minWidth: "120px" }}
          submitValue={submitValue}
        />
        <Dropdown
          id="rating"
          title="Ocena"
          list={ratingList}
          color="secondary"
          styled={{ minWidth: "120px" }}
          submitValue={submitValue}
        />
        <Dropdown
          id="orderBy"
          title="Sortiranje po"
          list={orderByList}
          color="secondary"
          styled={{ minWidth: "120px" }}
          submitValue={submitValue}
        />
      </BottomPart>
    </Container>
  )
}

const Container = styled.div`
  width: 700px;
  margin-bottom: 1em;
`
const Title = styled.h2`
  color: white;
`
const UpperPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 12px 1em 0;
`
const TextFieldStyled = muiStyled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white"
  },
  "&:hover": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "white !important"
    }
  }
}))

const genreList = [
  { id: 0, name: "Svi", value: "default" },
  { id: 1, name: "All", value: "All" },
  { id: 2, name: "All", value: "All" },
  { id: 3, name: "All", value: "All" }
]

const ratingList = [
  { id: 0, name: "Svi", value: "default" },
  { id: 1, name: "9+", value: "9" },
  { id: 2, name: "8+", value: "8" },
  { id: 3, name: "7+", value: "7" },
  { id: 4, name: "6+", value: "6" },
  { id: 5, name: "5+", value: "5" },
  { id: 6, name: "4+", value: "4" },
  { id: 7, name: "3+", value: "3" },
  { id: 8, name: "2+", value: "2" }
]

const orderByList = [
  { id: 0, name: "Najnoviji", value: "najnoviji" },
  { id: 1, name: "Najstariji", value: "najstariji" },
  { id: 2, name: "Abecedno", value: "abecedno" }
]
