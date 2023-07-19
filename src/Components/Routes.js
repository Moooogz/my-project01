import  {Route, Routes} from 'react-router-dom';
import { Mainpage } from '../pages/Main';
import { Help } from '../pages/Help';
import LoginPage from '../pages/Loginpage';
import Sidebar from './Sidebar';

const RoutesComponent = () => {
  return (
 
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/main' element={<Mainpage/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
   
  )
}

export default RoutesComponent