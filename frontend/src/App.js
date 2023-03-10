
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hotels" element={<List/>}/>
    <Route path="/hotels/:id" element={<Hotel/>}/>
   </Routes>
    </Router>
   
        
  );
}

export default App;
