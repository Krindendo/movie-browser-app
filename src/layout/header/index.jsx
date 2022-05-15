import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import authService from "services/auth.service";
import { Link as LinkR } from "react-router-dom";
import Button from "@mui/material/Button";
import SearchInputNavbar from "components/SearchInputNavbar";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowDimensions from "hooks/useWindowDimensions";
import useAuth from "hooks/useAuth";

export default function Header() {
  const { isLoggedIn } = useAuth();
  const [showNavbar, setShowNavbar] = useState(true);
  const { width } = useWindowDimensions();
  let history = useHistory();
  let { pathname } = useLocation();

  const handleLogout = async (event) => {
    event.preventDefault();
    const msg = await authService.logout();
    if (msg) {
      history.push("/");
    }
  };

  useEffect(() => {
    if (width >= 830) {
      setShowNavbar(false);
    }
  }, [width]);

  const handleShow = (event) => {
    event.preventDefault();
    setShowNavbar((prev) => !prev);
  };

  useEffect(() => {
    setShowNavbar(false);
  }, [pathname]);

  return (
    <Container showNavbar={showNavbar}>
      <Title to={process.env.REACT_APP_PATH_LANDING}>Filmovi.pretraga</Title>
      <Bars onClick={handleShow} fontSize="large" color="secondary" />
      <Content showNavbar={showNavbar}>
        <SearchInputNavbar />
        <Link to={process.env.REACT_APP_PATH_LANDING}>Početna</Link>
        <Link to={process.env.REACT_APP_PATH_BROWSE}>Pretraga fimova</Link>
        {isLoggedIn ? (
          <Button onClick={handleLogout} color="secondary" variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Odjavi se
          </Button>
        ) : (
          <Link to={process.env.REACT_APP_PATH_LOGIN}>
            <Button color="secondary" variant="contained" sx={{ my: 1, mx: 1.5 }}>
              Prijava
            </Button>
          </Link>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: ${(props) => (props.showNavbar ? "column" : "row")};
  justify-content: ${(props) => (props.showNavbar ? "center" : "space-between")};
  gap: ${(props) => (props.showNavbar ? "20px" : "0")};
  align-items: center;
  position: sticky;
  top: 0;
  height: ${(props) => (props.showNavbar ? "100vh" : "70px")};
  background-color: #082032;
  padding: 0 32px;
  z-index: 10;
`;

const Link = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const Title = styled(LinkR)`
  color: white;
  font-size: 1.2rem;
`;

const Bars = styled(MenuIcon)`
  display: none !important;
  @media screen and (max-width: 830px) {
    display: block !important;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    cursor: pointer;
  }
`;

const Content = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.showNavbar ? "column" : "row")};
  gap: ${(props) => (props.showNavbar ? "1rem" : "0")};
  @media screen and (max-width: 830px) {
    display: ${(props) => (props.showNavbar ? "flex" : "none")};
  }
`;
