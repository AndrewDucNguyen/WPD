import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CaseDetails from './CaseDetails';
import UserDetails from './UserDetails';
import UserCaseDetails from './UserCaseDetails';
import CartDetails from './CartDetails';
import UserCartDetails from './UserCartDetails';
import NotFound  from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/view/case/:id">
              <CaseDetails />
            </Route>
            <Route path="/view/user/:id">
              <UserDetails />
            </Route>
            <Route path="/view/user-case/:caseid/:userid">
              <UserCaseDetails />
            </Route>
            <Route path="/view/cart/:id">
              <CartDetails />
            </Route>
            <Route path="/view/user-cart/:cartid/:userid">
              <UserCartDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
