import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

export default function Dashboard() {
    const [count, setCount] = useState(null);
    const [yesterdayCount, setYesterdayCount] = useState(null);
    const [monthlyCount, setMonthlyCount] = useState(null);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await fetch('http://localhost:4000/latecomers/count');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCount(data.count);
            } catch (error) {
                console.error('Error fetching count:', error);
            }
        };

        const fetchYesterdayCount = async () => {
            try {
                const response = await fetch('http://localhost:4000/latecomers/yesterday');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setYesterdayCount(data.count);
            } catch (error) {
                console.error('Error fetching yesterday\'s count:', error);
            }
        };

        const fetchMonthlyCount = async () => {
            try {
                const response = await fetch('http://localhost:4000/latecomers/monthly');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMonthlyCount(data.count);
            } catch (error) {
                console.error('Error fetching monthly count:', error);
            }
        };

        fetchCount();
        fetchYesterdayCount();
        fetchMonthlyCount();
    }, []);

    return (
        <div className="sb-nav-fixed">
            <Topbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Dashboard</h1>
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                        <div className="card-body">Today's Latecomers: <b>{count}</b></div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to="#">View Details</Link>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Yesterday's Latecomers: <b>{yesterdayCount}</b></div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to="#">View Details</Link>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-success text-white mb-4">
                                        <div className="card-body">Students in Time:</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to="#">View Details</Link>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-danger text-white mb-4">
                                        <div className="card-body">Total latecomers this month: <b>{monthlyCount}</b></div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to="#">View Details</Link>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4">
                                {/* 
                                <div className="card-header">
                                    <i className="fas fa-table me-1"></i>
                                    DataTable Example
                                </div>
                                <div className="card-body">
                                    <table id="myTable">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                */}
                            </div>
                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2023</div>
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
}
