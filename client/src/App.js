import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from './components/Featured';
import AppNavbar from './components/AppNavbar';
import Carousel from './components/Carousel';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className='App w-100'>
      <AppNavbar />
      <Carousel />
      <Featured />
      <Showcase />
    </div>
  );
}

export default App;
