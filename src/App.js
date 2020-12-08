
import { NavigationBar } from './components/NavigationBar';
import { Spaceships } from './components/Spaceships';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/Spaceships" component={Spaceships} />
        <Route path="/" component={Home} />
      </Switch>
    </Router >
  );
}

export default App;
