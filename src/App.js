import './App.css';
import Card from './Card';
import Navbar from './Header';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

const useAuth =()=>{
  const user={ signedIn: localStorage.getItem('Name') ? true : false };
  return user && user.signedIn;
};

const authCheck =() => {
  console.log('hgvhgvhgv   ', useAuth);
  if (localStorage.getItem('Name')) {
    return (
      <Navbar />
    );
  } else {
    <Card />
  }
};

const App=()=> {
  return (
    <div className="App" style={{backgroundImage:"url(/images/background.jpg)"}}>
       <Router>
        <Routes>
        <Route path='/' element={ useAuth() ? < Navbar /> : <Card />}></Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/dashboard' element={ <Navbar />}></Route>
        </Route>
        </Routes>
       </Router>
    </div>
  );
}
export default App;

