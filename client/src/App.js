import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from './components/Featured';
import AppNavbar from './components/AppNavbar';
import Carousel from './components/Carousel';
import Showcase from './components/Showcase';
import AppCarousel from './components/AppCarousel';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className='App w-100'>
      <AppNavbar />
      <Carousel />
      <Featured />
      <Showcase />
      <AppCarousel />
      <AppFooter />
    </div>
  );
}

export default App;
