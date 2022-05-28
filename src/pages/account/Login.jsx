import styled from "styled-components";
import Layout from "layout/Layout";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import authService from "services/auth.service";

export default function Login() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const user = await authService.login({ ...data });
    if (user) {
      history.push("/");
    }
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="standard"
              fullWidth
              error={!!errors.email}
              helperText={errors.email && "Polje je obavezno"}
              id="email"
              label="Email Address *"
              name="email"
              autoComplete="email"
              autoFocus
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
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: true })}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Prijavite se
            </Button>
            <Register>
              <LinkStyled to={process.env.REACT_APP_PATH_REGISTER}>Nemate nalog? Registrujte se</LinkStyled>
            </Register>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

const Register = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const LinkStyled = styled(Link)`
  color: var(--primary-dark-color);
`;
