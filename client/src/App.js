import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import store from './store';
import { Provider } from 'react-redux';
import AppFooter from './components/AppFooter';
import PageGenerator from './components/PageGenerator';
import Product from './components/Product';
import Login from './components/Login';
import Cart from './components/Cart';
import { loadUser } from './actions/authActions';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TreeView.css';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <div className='App w-100'>
              <AppNavbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route
                  path='/components/:product_type'
                  exact
                  component={PageGenerator}
                />
                <Route path='/product/:id' exact component={Product} />
                <Route path='/login' exact component={Login} />
                <Route path='/cart' exact component={Cart} />
              </Switch>
              <AppFooter />
            </div>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
