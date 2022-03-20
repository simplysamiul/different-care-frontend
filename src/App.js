import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./views/components/shared/Footer";
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
      <Footer />
    </Router>
  );
}

export default App;
