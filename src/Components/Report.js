import React, { useState } from 'react';
import axios from 'axios';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Tables from './Reporttable';

const Report = () => {
  const [date, setDate] = useState('');
  const [report, setReport] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:4000/report', {
        params: { date }
      });
      setReport(response.data);
      setError('');
    } catch (error) {
      console.error(error);
      setError('Failed to fetch the report');
    }
  };

  const data = [];

  report.forEach(({ latecomer, students }) => {
    students.forEach(student => {
      data.push({
          rollno: latecomer.rollno,
          datetime: latecomer.datetime,
          name: student.name,
          email: student.email,
          mobile: student.mobile,
          year: student.year,
          branch: student.branch,
          collegebranch: student.collegebranch
      });
    });
  });
  console.log(data)



  return (
    <div className="sb-nav-fixed">
      <Topbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Generate Report</h1>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Date
                </div>
                <div className="card-body">
                  <h6>Enter Date :</h6>
                  <input
                    type="date"
                    name="datetime"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <br />
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Generate
                  </button>
                </div>
              </div>
            </div>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Latecomers List</h1>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Students List
                </div>
                <div className="card-body">
                  {error && <p>{error}</p>}
                  {report.length > 0 && (
                    <div>
                      <h2>Report</h2>
                      <Tables data={data}/>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy;ADC Latecomers</div>
                <div>
                  <Link to="#">Privacy Policy</Link>
                  &middot;
                  <Link to="#">Terms &amp; Conditions</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Report;
