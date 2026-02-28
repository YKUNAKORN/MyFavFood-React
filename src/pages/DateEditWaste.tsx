import React from 'react';
import '../styles/date-waste.css';

const DateEditWaste: React.FC = () => {
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
                    <a href="/employees"><i className="bi bi-people"></i> Employees</a>
                    <a href="/cash-control"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="/inventory" className="active"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="/" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
            </div>{/* Left sidebar end */}

            {/* Right sidebar */}
            <div className="r-sidebar">
                {/* Header */}
                <header>
                    <div className="nav-current">
                        <p className="nav">Login</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav">Inventory</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav-active">Date Waste</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                {/* Container0 */}
                <div className="container0">
                    {/* Container1 */}
                    <div className="container1">
                        <h2>Date waste</h2>
                    </div>
                    {/* Container2 */}
                    <div className="container2">
                        <div className="table-container2">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>                           <th>Time</th>               <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monday, 14 July 2024</td>           <td>09 : 17 : 45</td>       <td><a href="/edit-waste"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    <tr>
                                        <td>Thurday, 4 July 2024</td>           <td>12 : 30 : 00</td>       <td><a href="/edit-waste"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday, 22 November 2024</td>      <td>12 : 30 : 55</td>       <td><a href="/edit-waste"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    <tr>
                                        <td>Friday, 20 July 2024</td>           <td>03 : 56 : 15</td>       <td><a href="/edit-waste"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    <tr>
                                        <td>Saturday, 1 Januarry 2024</td>      <td>08 : 00 : 00</td>       <td><a href="/edit-waste"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>

                        <div className="buttons">
                            <a href="/inventory">
                                <button className="back-btn"><i className="bi bi-caret-left"></i>Back</button>
                            </a>
                            <a href="/overview">
                                <button className="home-btn"><i className="bi bi-house-door"></i>Home</button>
                            </a>
                        </div>
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

        </div>
    );
};

export default DateEditWaste;
