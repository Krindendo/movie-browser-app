import { useState } from "react"
import styled from "styled-components"
import search_white from "assets/icons/search_white_24dp.svg"
import { useHistory } from "react-router-dom"

export default function SearchInputNavbar() {
  const [title, setTitle] = useState("")
  let history = useHistory()

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title) {
      history.push(process.env.REACT_APP_PATH_BROWSE)
    }
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Search type="text" id="search" name="fname" value={title} onChange={handleChange} />
    </Form>
  )
}

const Form = styled.form`
  position: relative;
`
const Search = styled.input`
  width: 250px;
  height: 35px;
  font-size: 0.9em;
  font-weight: 600;
  color: var(--white-color);
  border: 2px solid var(--primary-light-color);
  border-radius: 20px;
  padding: 4px 30px 4px 36px;
  background: var(--primary-dark-color) url(${search_white}) no-repeat 7px 5px;
`
