import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TreeView.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import AppFooter from './components/AppFooter';
import Motherboard from './components/Motherboard';

function App() {
  return (
    <div className='App w-100'>
      <AppNavbar />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/components/motherboard' exact component={Motherboard} />
        </Switch>
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
