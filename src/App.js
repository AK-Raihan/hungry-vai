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
import Login from './Pages/Login/Login/Login';
import Booking from './Pages/Booking/Booking';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder/ManageAllOrder';
import AuthProvider from './Context/AuthProvider';
import AddService from './Pages/Dashboard/AddService/AddService';
import Register from './Pages/Login/Register/Register';
import About from './Pages/Home/About/About';


function App() {
  return (
    <div className="">

      <BrowserRouter>
      <AuthProvider>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/products" element={<Products />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/booking/:productId" element={<Booking />}>
          </Route>
          <Route path="/myOrder" element={<MyOrder />}>
          </Route>
          <Route path="/manageOrder" element={<ManageAllOrder />}>
          </Route>
          <Route path="/addService" element={<AddService />}>
          </Route>
        </Routes>
        <Footer/>
      </AuthProvider>
  

    </BrowserRouter>

      
    </div>
  );
}

export default App;
