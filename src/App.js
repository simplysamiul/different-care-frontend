import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menubar from "./views/components/shared/Menubar";
import Home from "./views/pages/Home";


function App() {
  return (
    <Router>
      <Menubar />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/home">
              <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
