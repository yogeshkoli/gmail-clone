import React from 'react';
import './App.scss';
import Header from './app/components/Header';
import Sidebar from './app/components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Mail from './app/components/Mail';
import EmailList from './app/components/EmailList';
import SendMail from './app/components/SendMail';

function App() {
  return (
    <Router>
      <div className="app">

        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
