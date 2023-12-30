import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Log from './components/Log';
import Sign from './components/Sign';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
 <>
  <NavBar></NavBar>
  {/* <Home></Home>
  <Product></Product>
  <About></About>
  <Contact></Contact> */}

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/log" element={<Log/>} />
            <Route path="/sign" element={<Sign/>} />
        </Routes>

        <footer className="foot"> 
        All right reserved at &#169;Krunal
      </footer>
 </>
  );
}

export default App;
