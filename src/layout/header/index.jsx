import { useState, useEffect } from "react"
import styles from "./styles.module.css"
import clsx from "clsx"
import { useHistory } from "react-router-dom"
import authService from "services/auth.service"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import SearchInputNavbar from "components/SearchInputNavbar"
import MenuIcon from "@mui/icons-material/Menu"
import useWindowDimensions from "hooks/useWindowDimensions"

export default function Header() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("userName"))
  const [showNavbar, setShowNavbar] = useState(true)
  const { width } = useWindowDimensions()
  let history = useHistory()

  const handleLogout = async (event) => {
    event.preventDefault()
    const msg = await authService.logout()
    if (msg) {
      setIsLogged(null)
      history.push("/")
    }
  }

  useEffect(() => {
    if (width >= 830) {
      setShowNavbar(false)
    }
  }, [width])

  const handleShow = (event) => {
    event.preventDefault()
    setShowNavbar((prev) => !prev)
  }

  return (
    <header className={clsx(styles.container, showNavbar && styles.containerForMobile)}>
      <Link className={styles.title} to={process.env.REACT_APP_PATH_LANDING}>
        Filmovi.pretraga
      </Link>
      <MenuIcon onClick={handleShow} className={styles.bars} fontSize="large" color="secondary" />
      <nav className={clsx(styles.content, showNavbar && styles.content_show)}>
        <SearchInputNavbar />
        <Link className={styles.link} to={process.env.REACT_APP_PATH_LANDING}>
          Početna
        </Link>
        <Link className={styles.link} to={process.env.REACT_APP_PATH_BROWSE}>
          Pretraga fimova
        </Link>
        {isLogged ? (
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
      </nav>
    </header>
  )
}
