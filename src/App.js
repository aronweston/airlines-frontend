import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home  from "./pages/Home";
import NavBar from "./components/NavBar"
import Planes from './pages/Planes'
import Flights from './pages/Flights'
import SingleFlight from './pages/SingleFlight'
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ Planes } path='/planes' />
        <Route component={ Flights } path='/flights/' />
        <Route component={ SingleFlight } path='/flights/:id' />
        <Route component={ Search } path='/search' />
        </Switch>
    </BrowserRouter>
  )
}

export default App;


