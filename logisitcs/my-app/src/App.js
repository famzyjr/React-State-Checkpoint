import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import  ShopCategory from './pages/ShopCategory'
import Product from './pages/Product';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/kaftan' element={<ShopCategory category="Kaftan" header="KAFTAN" />}/>
        <Route path='/agbada' element={<ShopCategory category="Agbada" header="AGBADA" />}/>
        <Route path="/product" element={<Product />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
