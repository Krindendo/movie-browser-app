import { useState } from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function Dropdown(props) {
  const { id, title, list, submitValue } = props;
  const [select, setSelect] = useState(list[0].value);
  const handleChange = (event) => {
    setSelect(event.target.value);
    submitValue(event);
  };
  return (
    <Container>
      <InputLabel style={{ color: "white" }} id={id}>
        {title}
      </InputLabel>
      <SelectStyled labelId={id} name={id} value={select} label={select} color="secondary" onChange={handleChange}>
        {list.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </SelectStyled>
    </Container>
  );
}
const Container = styled.div``;

const SelectStyled = muiStyled(Select)(() => ({
  width: "200px",
  "& .MuiOutlinedInput-input": {
    color: "white !important"
  },
  "& .MuiSvgIcon-root": {
    color: "white !important"
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white"
  },
  "&:hover": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "white !important"
    }
  }
}));
