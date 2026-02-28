import React from 'react';
import '../styles/date-stock.css';

const DateStock: React.FC = () => {
    return (
        <div className="main-content">
            {/* Left sidebar */}
            <div className="l-sidebar">
                <a href="../pages/overview.html">
                    <h1 className="logo">MyFavFood</h1>
                </a>
                <nav>
                    <a href="../pages/overview.html"><i className="bi bi-pie-chart"></i> Overview</a>
                    <a href="../pages/ring-sales.html"><i className="bi bi-graph-up"></i> Ring Sales</a>
                    <a href="../pages/finished-waste.html"><i className="bi bi-trash"></i> Finished Waste</a>
                    <a href="../pages/employees.html"><i className="bi bi-people"></i> Employees</a>
                    <a href="../pages/cash-control.html"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="../pages/inventory.html" className="active"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="../index.html" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
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
                        <p className="nav-active">Date Stock</p>
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
                        <h2>Date stock</h2>
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
                                        <td>Monday, 14 July 2024</td>           <td>09 : 17 : 45</td>       <td><a href="../pages/stock.html"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    <tr>
                                        <td>Thurday, 4 July 2024</td>           <td>12 : 30 : 00</td>       <td><a href="../pages/stock.html"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday, 22 November 2024</td>      <td>12 : 30 : 55</td>       <td><a href="../pages/stock.html"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    <tr>
                                        <td>Friday, 20 July 2024</td>           <td>03 : 56 : 15</td>       <td><a href="../pages/stock.html"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    <tr>
                                        <td>Saturday, 1 Januarry 2024</td>      <td>08 : 00 : 00</td>       <td><a href="../pages/stock.html"><button className="continue-btn">Continue <i className="bi bi-caret-right"></i></button></a></td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>

                        <div className="buttons">
                            <a href="../pages/inventory.html">
                                <button className="back-btn"><i className="bi bi-caret-left"></i>Back</button>
                            </a>
                            <a href="../pages/overview.html">
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
                                <a href="../pages/overview.html">Overview</a>
                                <a href="../pages/ring-sales.html">Ring Sales</a>
                                <a href="../pages/finished-waste.html">Finished Waste</a>
                                <a href="#">Recall Order</a>
                                <a href="../pages/employees.html">Employees</a>
                            </div>
                            <div className="more-information-column2">
                                <a href="../pages/time-punch.html">Time Punch</a>
                                <a href="../pages/information.html">Information</a>
                                <a href="../pages/cash-control.html">Cash Control</a>
                                <a href="../pages/reprint.html">Reprint</a>
                                <a href="../pages/void.html">Void Transaction</a>
                            </div>
                            <div className="more-information-column3">
                                <a href="../pages/inventory.html">Inventory</a>
                                <a href="../pages/delivery.html">Delivery</a>
                                <a href="../pages/edit-waste.html">Edit Waste</a>
                                <a href="../pages/stock.html">Stock</a>
                                <a href="../pages/waste.html">Waste</a>
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

export default DateStock;
