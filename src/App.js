import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Header, Tabs, Footer } from './components';
import { Main, User, Selected } from './pages';
import { useActionsRoutines } from './hooks';
import { getUsersPromiseCreator } from './redux/users';

const routerOptions = [
  {
    path: '/',
    label: 'Main'
  },
  {
    path: '/selected',
    label: 'Selected users'
  }
];

function App() {
  const getUsers = useActionsRoutines(getUsersPromiseCreator);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <div className="Content" style={{ flex: 1 }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Tabs options={routerOptions} />
              <Main />
            </Route>
            <Route exact path='/selected'>
              <Tabs options={routerOptions} />
              <Selected />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
