import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from './components/Featured';
import AppNavbar from './components/AppNavbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className='App'>
      <AppNavbar />
      <Carousel />
      <Featured />
    </div>
  );
}

export default App;
