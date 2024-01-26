import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Movie from './Movie';
import Nav from './Nav';
import Home from './Home';
import './index.css';
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
       <Nav/>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/Movie' element={<Movie/>}></Route>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
