import './App.css';
import Home from "./pages/Home.js";
import SearchPage from "./SearchPage.js";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
