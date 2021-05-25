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
import { useSelector } from 'react-redux';
import { selectSendMessageOpen } from './features/mail/mailSlice';

function App() {

  const sendMessageOpen = useSelector(selectSendMessageOpen);

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
        {sendMessageOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
