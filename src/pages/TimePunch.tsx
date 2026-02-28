import React from 'react';
import '../styles/time-punch.css';

const TimePunch: React.FC = () => {
    return (
        <div className="main-content">
            {/* Left sidebar */}
            <div className="l-sidebar">
                <a href="/overview">
                    <h1 className="logo">MyFavFood</h1>
                </a>
                <nav>
                    <a href="/overview"><i className="bi bi-pie-chart"></i> Overview</a>
                    <a href="/ring-sales"><i className="bi bi-graph-up"></i> Ring Sales</a>
                    <a href="/finished-waste"><i className="bi bi-trash"></i> Finished Waste</a>
                    <a href="/employees" className="active"><i className="bi bi-people"></i> Employees</a>
                    <a href="/cash-control"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="/inventory"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="/" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
            </div>
            {/* Left sidebar end */}

            {/* Right sidebar */}
            <div className="r-sidebar">
                <header>
                    <div className="nav-current">
                        <p className="nav">Employees</p>
                        <p className="nav">&gt;</p>
                        <p className="nav-active">Time Punch</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                {/* main container */}
                <section className="main-container">
                    {/* section 1 */}
                    <div className="section1">
                        <div className="top-title">
                            <p className="nav-text-active">Time Punch</p>
                            <p className="nav-text">&gt;</p>
                            <p className="nav-text">Employee name</p>
                            <p className="nav-text">&gt;</p>
                            <div className="nav-text">XXXXXXXXXXXX</div>
                        </div>
                        <a href="/employees">
                            <button className="back-btn"><i className="bi bi-caret-left"></i>Back</button>
                        </a>
                    </div>
                    {/* section 2 */}
                    <div className="section2">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Check-in</th>
                                    <th>Check-out</th>
                                </tr>
                            </thead>
                            {/* table */}
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Kunakorn</td>
                                    <td>Yamngam</td>
                                    <td>9:30 AM</td>
                                    <td>4:30 PM</td>
                                </tr>
                            </tbody>
                            {/* table */}
                        </table>
                    </div>
                </section>
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
                </footer>
                {/* Footer end */}

            </div>
            {/* Right sidebar end */}

            {/* Main content end */}
        </div>
    );
};

export default TimePunch;
