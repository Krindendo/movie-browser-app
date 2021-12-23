import styled from "styled-components"

const Box = styled.div`
  width: 100%;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  overflow: hidden;
  padding: 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 1px solid #ff4c29;
  }
`

export default Box
