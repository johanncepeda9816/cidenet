import './App.css';
import { Home, CreateUser, EditUser } from "./screens/index";
import { Navbar } from "./components/index";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/createUser" component={CreateUser}/>
          <Route exact path="/editUser" component={EditUser}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
