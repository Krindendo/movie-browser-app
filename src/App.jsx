import { Suspense, lazy } from "react"
import styled from "styled-components"
import { Route, Switch, Redirect } from "react-router-dom"
import LoadingPage from "pages/public/Loading"
import LandingPage from "pages/public/Landing"
import LoginPage from "pages/account/Login"
import RegisterPage from "pages/account/Register"
import ActorPage from "pages/searchable/Actor"
import BrowsePage from "pages/searchable/Browse"
import MoviePage from "pages/searchable/movie/MoviePages"
const SettingsPage = lazy(() => import("pages/protected/settings/Settings"))

export default function App() {
  return (
    <Container>
      <Suspense fallback={LoadingPage}>
        <Switch>
          <Route exact path={process.env.REACT_APP_PATH_LANDING} component={LandingPage} />
          <Route path={process.env.REACT_APP_PATH_LOGIN} component={LoginPage} />
          <Route path={process.env.REACT_APP_PATH_REGISTER} component={RegisterPage} />
          <Route path={process.env.REACT_APP_PATH_BROWSE} component={BrowsePage} />
          <Route path={process.env.REACT_APP_PATH_MOVIE_ID} component={MoviePage} />
          <Route path={process.env.REACT_APP_PATH_ACTOR_ID} component={ActorPage} />
          {/* <AuthRoute exact path="/settings" component={SettingsPage} /> */}
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Container>
  )
}

const Container = styled.div`
  background-color: #f5f5f5;
`
