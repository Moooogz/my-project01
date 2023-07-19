import './App.css';
import  {Route, Routes} from 'react-router-dom';
import { Mainpage } from './pages/Main';
import { Help } from './pages/Help';
import LoginPage from './pages/Loginpage';



export default function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/main' element={<Mainpage/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
      
    </div>
  );
}


