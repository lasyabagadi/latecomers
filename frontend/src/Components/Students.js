import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Topbar from './Topbar';
import Sidebar from './Sidebar';


export default function Students() {
    const [data, setData] = useState({
        rollno: "",
        name: "",
        email: "",
        mobile: "",
        parentnumber:"",
        branch:"",
        collegebranch:"",
        year:""
      });



      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      console.log(data)
      };



    const handleSubmit=(event)=>
      {
        // alert("Working");

        event.preventDefault();

      console.log(data.roll)

    //   alert(data.roll)

      axios.post('http://localhost:4000/api/addstudent',data)
      .then((response) => {
            console.log(response.data)

            if(response.status==200)
            {
                alert('Student added');

                
            }
            else{
                alert('failed');
            }
        });

    }

  return (
    <>
    <div class="sb-nav-fixed">
       
       <Topbar/>
       <div id="layoutSidenav">

         <Sidebar/>
    
    <div id="layoutSidenav_content">
<main>
    <div className="container-fluid px-4">
        <h1 className="mt-4">Students Report</h1>
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active"> Dashboard</li>
        </ol>
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Primary Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <Link className="small text-white stretched-link" href="#">View Details</Link>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-warning text-white mb-4">
                    <div className="card-body">Warning Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <Link className="small text-white stretched-link" href="#">View Details</Link>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                    <div className="card-body">Success Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <Link className="small text-white stretched-link" href="#">View Details</Link>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-danger text-white mb-4">
                    <div className="card-body">Danger Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <Link className="small text-white stretched-link" href="#">View Details</Link>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="card">
        <div className="card-header">
                        <i className="fas fa-chart-area me-1"></i>
                        Student Details
                    </div>
            <div className="card-body">
            
                <form onSubmit={handleSubmit}> 
                
                    <span>Roll Number:</span>
                    <br/>
                    <input type='text' required placeholder='Enter Roll Number' name="rollno" value={data.rollno} onChange={handleInputChange} className='form-control'/>
                    <br/>
                    <span>Name:</span>
                    <br/>
                    <input type='text' required placeholder='Enter Name' name="name" value={data.name} onChange={handleInputChange} className='form-control'/>
                    <br/>
                    <span>Email:</span>
                    <br/>
                    <input type='email' placeholder='Enter Email' name="email" value={data.email} onChange={handleInputChange} className='form-control'/>
                    <br/>
                    <span>Mobile Number:</span>
                    <br/>
                    <input type='text' placeholder='Enter Mobile Number' name='mobile' value={data.mobile} onChange={handleInputChange} className='form-control'/>
                    <br/>
                    <span>Parent Mobile Number:</span>
                    <br/>
                    <input type='text' placeholder='Enter Parent Mobile Number' name='parentnumber' value={data.parentnumber} onChange={handleInputChange}
                    className='form-control'/>
                    <br/>
                    <span>Branch:</span>
                    <br/>
                    <select value={data.branch} name='branch' onChange={handleInputChange} className='form-control' >
                        <option>Select branch</option>
                        <option value={'mecs'}>MECS</option>
                        <option value="mpcs">MPCS</option>
                    </select>
                    <br/>
                    <br/>
                    <span>College Branch:</span>
                    <br/>
                    <select value={data.collegebranch} name='collegebranch' onChange={handleInputChange} className='form-control' >
                        <option>Select branch</option>
                        <option value={'kakinada'}>Kakinada</option>
                        <option value={'rajahmundry'}>Rajahmundry</option>
                    </select>
                    <br/>
                    <br/>
                    <span>Year:</span>
                    <br/>
                    <select value={data.year} name='year' onChange={handleInputChange} className='form-control'>
                        <option>Select Year</option>
                        <option value={'2022'}>2022</option>
                        <option value={'2023'}>2023</option>
                    </select>
                    <br/>
                    <br/>
                  
                    <input type='submit' className='three'/>
                </form>
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