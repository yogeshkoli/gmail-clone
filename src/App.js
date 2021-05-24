import React from 'react';
import './App.scss';
import Header from './app/components/Header';
import Sidebar from './app/components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './app/components/Mail';
import EmailList from './app/components/EmailList';

function App() {
  return (
    <Router>
      <div className="app">

        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mai">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
