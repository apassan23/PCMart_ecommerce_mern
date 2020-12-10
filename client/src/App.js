import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TreeView.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import AppFooter from './components/AppFooter';
import Motherboard from './components/Motherboard';
import Processor from './components/Processor';
import Memory from './components/Memory';
import Graphics from './components/Graphics';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className='App w-100'>
          <AppNavbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route
              path='/components/motherboard'
              exact
              component={Motherboard}
            />
            <Route path='/components/processor' exact component={Processor} />
            <Route path='/components/memory' exact component={Memory} />
            <Route path='/components/graphics' exact component={Graphics} />
          </Switch>
          <AppFooter />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
