import styled from "styled-components"
import search_white from "assets/icons/search_white_24dp.svg"

const Content = styled.div`
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

export default function SearchInputNavbar() {
  return (
    <Content>
      <Search type="text" id="search" name="fname" />
    </Content>
  )
}
