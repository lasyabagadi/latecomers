import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import image from './Images/profile.png'
import { useEffect } from 'react'


export default function Tracklatecomers() {



    const getCurrentDateTime = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
      };

    const [data, setData] = useState({
        rollno: "",
        datetime: getCurrentDateTime()
      });

      const [students,setStudents] = useState([{}]);


    const handleSubmit = () =>{
        axios.post('http://localhost:4000/api/addlatecomers',data)
        .then((response) => {
            console.log(response.data)
            console.log(response.data.studentsdata)

            setStudents(response.data.studentsdata)

            setData((prevData) => ({
              ...prevData,
              rollno: ""
          }));
          
            // if(response.status==200)
            // {
                
            //     alert('data inserted');
                
                
            // }
            // else{
            //     alert('failed');
            // }
        });
        // console.log(roll)
    } 


    useEffect(() => {
      if (data.rollno !== "" && data.rollno.length === 10) {
          handleSubmit();
      }
  }, [data.rollno]);



  return (
    <>
    
    <div className="sb-nav-fixed">
       
        <Topbar/>
        <div id="layoutSidenav">
        <Sidebar/>
     
    <div id="layoutSidenav_content">
    <main>
    <div className="container-fluid px-4">
        <h1 className="mt-4">Track Latecomers</h1>
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        
        <div className="row">
            <div className="col-xl-6">
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-chart-area me-1"></i>
                        Student Roll number Tracking
                    </div>
                    <div className="card-body">
                        <h5>

                        <h5>
                           Date Time: </h5>
                            <input type='datetime-local' name='datetime' className='form-control' value={data.datetime} onChange={(e) =>setData({...data, datetime: e.target.value })}/>
                            <br/>

                            Roll number: </h5>
                            <input type='text' name='rollno' className='form-control' value={data.rollno} onChange={(e) =>setData({...data, rollno: e.target.value })}/>
                            <br/>


            


                            {/* <Link className="btn btn-primary" onClick={()=>handleSubmit()}>Submit</Link> */}

                            <input type='submit' onClick={()=>handleSubmit()}/>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-chart-bar me-1"></i>
                        Student Details
                    </div>
                    <div className='card-body'>

                    <div className="text-center mb-4">
                          <img src={image} className='img-thumbnail rounded-circle' alt="Profile" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <table className="table ">
                          <tbody>
                            <tr>
                              <th scope="row" className='one'>Roll no</th>
                              <td className='two'>{students.rollno}</td>
                            </tr>
                            <tr>
                              <th scope="row" className='one'>Name</th>
                              <td className='two'>{students.name}</td>
                            </tr>
                            <tr>
                              <th scope="row" className='one'>Year</th>
                              <td className='two'>{students.year}</td>
                            </tr>
                            <tr>
                              <th scope="row" className='one'>Branch</th>
                              <td className='two'>{students.branch}</td>
                            </tr>
                            <tr>
                              <th scope="row" className='one'>College branch</th>
                              <td className='two'>{students.collegebranch}</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<footer className="py-4 bg-light mt-auto">
    <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; Your Website 2023</div>
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
