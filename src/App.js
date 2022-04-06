import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Services/Products/Products';


function App() {
  return (
    <div className="">

      <BrowserRouter>
  
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/products" element={<Products />}>
          </Route>
        </Routes>
        <Footer/>

    </BrowserRouter>

      
    </div>
  );
}

export default App;
