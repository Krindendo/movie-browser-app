import { useState, useEffect } from "react"
import styled from "styled-components"
import { styled as muiStyled } from "@mui/material/styles"
import Dropdown from "./Dropdown"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

export default function SearchInput(props) {
  const {} = props
  const [input, setInput] = useState("")

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <Container>
      <Title>Pretraga</Title>
      <UpperPart>
        <TextFieldStyled
          value={input}
          onChange={handleInputChange}
          color="secondary"
          variant="outlined"
          size="small"
          inputProps={{ style: { color: "white", height: "25px" } }}
          fullWidth
        />
        <Button color="secondary" variant="contained" size="large" sx={{ my: 1, mx: 1.5 }}>
          Pretraga
        </Button>
      </UpperPart>
      <BottomPart>
        <Dropdown id="genre" title="Žanr" list={genre} color="secondary" styled={{ minWidth: "120px" }} />
        <Dropdown id="rating" title="Ocena" list={rating} color="secondary" styled={{ minWidth: "120px" }} />
        <Dropdown id="orderBy" title="Sortiranje po" list={orderBy} color="secondary" styled={{ minWidth: "120px" }} />
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

const genre = [
  { id: 0, name: "All", value: "All" },
  { id: 1, name: "All", value: "All" },
  { id: 2, name: "All", value: "All" },
  { id: 3, name: "All", value: "All" }
]

const rating = [
  { id: 0, name: "Svi", value: "All" },
  { id: 1, name: "9+", value: "9" },
  { id: 2, name: "8+", value: "8" },
  { id: 3, name: "7+", value: "7" },
  { id: 4, name: "6+", value: "6" },
  { id: 5, name: "5+", value: "5" },
  { id: 6, name: "4+", value: "4" },
  { id: 7, name: "3+", value: "3" },
  { id: 8, name: "2+", value: "2" }
]

const orderBy = [
  { id: 0, name: "Najnoviji", value: "Najnoviji" },
  { id: 1, name: "Najstariji", value: "Najstariji" },
  { id: 2, name: "Po broju glasova", value: "PoBrojuGlasova" },
  { id: 3, name: "Abecedno", value: "Abecedno" }
]
