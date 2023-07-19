import { Button } from '@mui/material';
import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import Sidebar from '../Components/Sidebar';


export const Mainpage = () => {

const [goToContact, setgoToContact]= useState(false); 

if (goToContact){
    return  <Navigate to={"/help"}/>
}
  return (
    <div className='App'>
    <Sidebar/>
    <div className='mainCSS'>
     
      <h1>Main Page</h1>
      <Button on onClick={()=>{setgoToContact(true)}}>Goto Help Page</Button>
    </div>
    </div>
  );
} 