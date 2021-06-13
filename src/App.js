import routes from 'routes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Store from "./context/Store";

function App(props) {
  return (
    <Store>
      <Router>
        <Switch>
          {routes.map(({path, Component}) => (
            <Route exact path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Router>
    </Store>
  );
}

export default App;
