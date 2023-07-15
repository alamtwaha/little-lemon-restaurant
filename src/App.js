import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import Testimonials from './Testimonial/Testimonials';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Reservation from './pages/Reservation';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/reservation' element={<Reservation />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/order-online' element={<OrderOnline />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    <Footer/>
      {/* <Nav /> */}
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}

    </>
  );
}

export default App;
