import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Tracklatecomers from './Components/Tracklatecomers';
import Students from './Components/Students';
import Login from './Components/Login';
import Report from './Components/Report';
import Studentslist from './Components/Studentslist';




function App() {

  return (
   <>
   <BrowserRouter>
   {/* <div class="sb-nav-fixed">
       
        <Topbar/>
        <div id="layoutSidenav">

          <Sidebar/>
      */}

         <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='tracklatecomers' element={<Tracklatecomers/>}/>
         <Route path='students' element={<Students/>}/>

         <Route path='studentslist' element={<Studentslist/>}/>
         <Route path='report' element={<Report/>}/>

         </Routes>
          



      {/* </div>
  
      </div> */}
    </BrowserRouter>
   </>
  );
}

export default App;
