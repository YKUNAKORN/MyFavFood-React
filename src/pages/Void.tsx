import React from 'react';
import '../styles/void.css';

const Void: React.FC = () => {
    return (
        <div className="main-content">
            {/* Left sidebar */}
            <div className="l-sidebar">
                <a href="/">
                    <h1 className="logo">MyFavFood</h1>
                </a>
                <nav>
                    <a href="/overview"><i className="bi bi-pie-chart"></i> Overview</a>
                    <a href="/ring-sales"><i className="bi bi-graph-up"></i> Ring Sales</a>
                    <a href="/finished-waste"><i className="bi bi-trash"></i> Finished Waste</a>
                    <a href="/employees"><i className="bi bi-people"></i> Employees</a>
                    <a href="/cash-control" className="active"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="/inventory"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="/" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
            </div>
            {/* Left sidebar end */}

            {/* Right sidebar */}
            <div className="r-sidebar">
                {/* Header */}
                <header>
                    <div className="nav-current">
                        <p className="nav">Login</p>
                        <p className="nav">&gt;</p>
                        <p className="nav">Cash control</p>
                        <p className="nav">&gt;</p>
                        <p className="nav-active">Void Transaction</p>
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
                        <h2>Void transaction</h2>
                    </div>
                    {/* Container2 */}
                    <div className="container2">
                        <div className="order-list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order No.</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0184</td>
                                        <td>29/02/2024</td>
                                        <td>09:23:09</td>
                                    </tr>
                                    <tr>
                                        <td>0184</td>
                                        <td>29/02/2024</td>
                                        <td>09:23:09</td>
                                    </tr>
                                    <tr>
                                        <td>0184</td>
                                        <td>29/02/2024</td>
                                        <td>09:23:09</td>
                                    </tr><tr>
                                        <td>0184</td>
                                        <td>29/02/2024</td>
                                        <td>09:23:09</td>
                                    </tr><tr>
                                        <td>0184</td>
                                        <td>29/02/2024</td>
                                        <td>09:23:09</td>
                                    </tr><tr>
                                        <td>0184</td>
                                        <td>29/02/2024</td>
                                        <td>09:23:09</td>
                                    </tr><tr>
                                        <td>0184</td>
                                        <td>29/02/2024</td>
                                        <td>09:23:09</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="print-area">
                            <div className="print-order">
                                <p className="head-paragraph">Print order</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <td className="tb-left">Order No.</td>      <td className="tb-right">Date / Time</td>
                                        </tr>
                                        <tr>
                                            <td className="tb-left">0184</td>           <td className="tb-right">29 Feb 2024 / 09 : 29</td>
                                        </tr>
                                        <tr>
                                            <td className="tb-left">0443</td>           <td className="tb-right">9 Nov 2024 / 15 : 53</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            
                            <div className="buttons">
                                <a href="#">
                                    <button id="print-btn" className="print">Void</button>
                                </a>
                                <a href="/cash-control">
                                    <button id="cancel-btn" className="cancel">Cancel</button>
                                </a>
                            </div>
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
                </footer>
                {/* Footer end */}

            </div>
            {/* Right sidebar end */}

            {/* Main content end */}
        </div>
    );
};

export default Void;
