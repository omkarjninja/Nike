import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes
} from 'react-router-dom';
import Navbar from './components/navigation/navbar';
import Example from './components/dropdown1';
import TopBar from './components/navigation/topbar';
import EComm from './components/navigation/ecom';
import NewArrival from './components/Section/newArrival';
import Cookies from './components/others/cookies';
import Cook from './components/others/cookies';
import Footer1 from './components/others/footer';
import Carousel from './components/Section/carousel';
import GearUp from './components/Section/Gearup';
import Trend from './components/Section/Trending';
import Featured from './components/Section/Featured';
import Single from './components/Section/single';
import Category from './components/Section/category';
import HomePage from './components/Homepage';
import Men from './components/Men';
import Product3 from './components/each-product/eachproduct';
import Women from './components/women';
import Kids from './components/kids';
import Customise from './components/customise';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<HomePage />} exact />
      <Route path='/men' element={<Men />} exact />
      <Route path='/women' element={<Women />} exact />
      <Route path='/kids' element={<Kids />} exact />
      <Route path='/customise' element={<Customise />} exact />
      <Route path='/men/h4' element={<Product3></Product3>} exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
