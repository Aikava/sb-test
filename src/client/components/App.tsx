import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Footer from 'client/components/Footer';
import Fund from 'client/components/Fund/Fund';
import Header from 'client/components/Header';
import TileGroup from 'client/components/TileGroup';
import DonationForm from 'client/components/DonationForm/DonationForm';

import 'client/components/app.css';


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Header/>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={TileGroup} />
              <Route exact path='/fund/:fundId' component={Fund} />
              <Route exact path='/donation/:fundId' component={DonationForm} />
            </Switch>
          </BrowserRouter>
          <Footer/>
      </React.Fragment>
    );
  }
}
