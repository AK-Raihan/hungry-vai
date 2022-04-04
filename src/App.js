
   
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';


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

        </Routes>

    </BrowserRouter>

      
    </div>
  );
}

export default App;
