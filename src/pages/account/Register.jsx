import { useState } from "react";
import styled from "styled-components";
import Layout from "layout/Layout";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useRegister from "hooks/authService/useRegister";

export default function Register() {
  const [showPassword, setShotPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const userRegistration = useRegister();

  const onSubmit = (data) => {
    userRegistration.mutate({ ...data });
  };

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registracija
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="standard"
              autoComplete="name"
              error={!!errors.name}
              helperText={errors.name && "Polje je obavezno"}
              name="name"
              fullWidth
              id="name"
              label="Ime *"
              autoFocus
              {...register("name", { required: true })}
            />
            <TextField
              margin="normal"
              variant="standard"
              fullWidth
              id="email"
              error={!!errors.email}
              helperText={errors.email && "Polje je obavezno"}
              label="Email Address *"
              name="email"
              autoComplete="email"
              {...register("email", { required: true })}
            />
            <TextField
              margin="normal"
              variant="standard"
              fullWidth
              error={!!errors.password}
              helperText={errors.password && "Polje je obavezno"}
              name="password"
              label="Password *"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="new-password"
              {...register("password", { required: true })}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={() => setShotPassword(!showPassword)}
                  value="showPassword"
                  color="primary"
                />
              }
              label="Prikaži lozinku"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Registruj se
            </Button>
            <Login>
              <LinkStyled to={process.env.REACT_APP_PATH_LOGIN}>Već imate nalog? Prijavite se</LinkStyled>
            </Login>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

const Login = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const LinkStyled = styled(Link)`
  color: var(--primary-dark-color);
`;
