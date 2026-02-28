import React from 'react';
import '../styles/overview.css';

const Overview: React.FC = () => {
    return (
        <div className="main-content">
            {/* Left sidebar */}
            <div className="l-sidebar">
                <a href="/overview">
                    <h1 className="logo">MyFavFood</h1>
                </a>
                <nav>
                    <a href="/overview" className="active"><i className="bi bi-pie-chart"></i>Overview</a>
                    <a href="/ring-sales"><i className="bi bi-graph-up"></i> Ring Sales</a>
                    <a href="/finished-waste"><i className="bi bi-trash"></i> Finished Waste</a>
                    <a href="/employees"><i className="bi bi-people"></i> Employees</a>
                    <a href="/cash-control"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="/inventory"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="/" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
            </div>{/* Left sidebar end */}

            {/* Right sidebar */}
            <div className="r-sidebar">
                <header>
                    <div className="nav-current">
                        <p className="nav">Login</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav-active">Overview</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                {/* top menu bar */}
                <div className="top-cards mid1">
                    <a href="/employees" className="card labor-tcd">
                        <i className="bi bi-person"></i>Labor
                    </a>
                    <a href="/inventory" className="card inventory-tcd">
                        <i className="bi bi-box"></i>Inventory
                    </a>
                    <a href="/cash-control" className="card CC-tcd">
                        <i className="bi bi-cash-stack"></i>Cash Control
                    </a>
                    <div className="check-buttons">
                        <a href="" className="check-in"><i className="bi bi-check-circle"></i>Check-in</a>
                        <a href="" className="check-out"><i className="bi bi-x-circle"></i>Check-out</a>
                    </div>
                </div>
                {/* left mid section */}
                <div className="middle-section mid2">
                    <div className="left-mid-content">
                        <a href="/ring-sales">
                            <div className="ring-sales">
                                <h3>Ring Sales</h3>
                                <div className="ring-sales-inside">
                                    <i className="bi bi-bar-chart-line"></i>
                                    <h5>Ring Sales</h5>
                                    <p>Ring sales details</p>
                                </div>
                            </div>
                        </a>

                        <div className="date-time">
                            <h3>Date / Time</h3>
                            <div className="date-time-inside">
                                <i className="bi bi-clock"></i>
                                <h5>Time : <br /> <span id="time"></span></h5>
                                <h5>Date : <br /> <span id="date"></span></h5>
                            </div>
                        </div>
                    </div>

                    <div className="active-employees">
                        <h3>Active Employees</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            {/* table */}
                            <tbody>
       
                            </tbody>{/* table */}
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <footer>
                    <div className="footer-section">
                        <h3>ABOUT MyFavFood</h3> <br />
                        <p>Our project's main goal is to make managing and running your business easier for you. Similar to Point of Sale, it helps you manage your own restaurant, control cash flow, and determine how much inventory you need. The interface user-friendly layout. You'll always have the most recent information.</p>
                    </div>
                    <div className="footer-section">
                        <h3>MORE INFORMATION</h3> <br />
                        <div className="more-information-row">
                            <div className="more-information-column1">
                                <a href="/overview">Overview</a>
                                <a href="/ring-sales">Ring Sales</a>
                                <a href="/finished-waste">Finished Waste</a>
                                <a href="#">Recall Order</a>
                                <a href="/employees">Employees</a>
                            </div>
                            <div className="more-information-column2">
                                <a href="/time-punch">Time Punch</a>
                                <a href="/information">Information</a>
                                <a href="/cash-control">Cash Control</a>
                                <a href="/reprint">Reprint</a>
                                <a href="/void">Void Transaction</a>
                            </div>
                            <div className="more-information-column3">
                                <a href="/inventory">Inventory</a>
                                <a href="/delivery">Delivery</a>
                                <a href="/edit-waste">Edit Waste</a>
                                <a href="/stock">Stock</a>
                                <a href="/waste">Waste</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>CONTACT INFORMATION </h3> <br />
                        <p>© MyFavFood Theme by Y.KUNAKORN</p>
                        <p>Power by  Unknown banner</p> <br />
                        <p>MyFavFood Co., Ltd.</p>
                        <p>Tel: +66 83 151 5661</p>
                    </div>
                </footer>{/* Footer end */}

            </div>{/* Right sidebar end */}
            {/* Main content end */}
        </div>
    );
};

export default Overview;