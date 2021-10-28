import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import './App.css';

function App() {
  return (
    <Router>
    <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
    </Switch>
  </Router>
  )
}

export default App;
