import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Studenttable from './Studenttable'
export default function Studentslist() {
    const [students,setStudents]=useState([{}])
    const [report, setReport] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/api/getstudents')
        .then(res => setStudents(res.data.students))
     },[])




  return (
    <>
    <div class="sb-nav-fixed">
       
       <Topbar/>
       <div id="layoutSidenav">

         <Sidebar/>
    
    <div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Students List</h1>


        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                Student List
            </div>
            <div class="card-body">
                <Studenttable data={students}/>
            </div>
        </div>
    </div>
</main>
<footer class="py-4 bg-light mt-auto">
    <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; Your Website 2023</div>
            <div>
                <Link href="#">Privacy Policy</Link>
                &middot;
                <Link href="#">Terms &amp; Conditions</Link>
            </div>
        </div>
    </div>
</footer>
</div>
    

</div>
  
  </div>
    </>
  )
}
