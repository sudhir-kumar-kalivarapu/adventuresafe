import './App.css';
import Card from './Card';
import Navbar from './Header';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import ProtectedRoutes1 from './ProtectedRoutes1';

const App=()=> {
  return (
    <div className="App" style={{backgroundImage:"url(/images/background.jpg)"}}>
       <Router>
        <Routes>
        <Route element={<ProtectedRoutes1/>}>
        <Route path='/' element={<Card />}></Route>
        </Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/dashboard' element={ <Navbar />}></Route>
        </Route>
        </Routes>
       </Router>
    </div>
  );
}
export default App;
