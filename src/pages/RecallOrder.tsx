import React from 'react';
import '../styles/recall-order.css';

const RecallOrder: React.FC = () => {
    return (
        <div className="main-content">
            <div className="l-sidebar">
                <a href="/overview">
                    <h1 className="logo">MyFavFood</h1>
                </a>
                <nav>
                    <a href="/overview"><i className="bi bi-pie-chart"></i> Overview</a>
                    <a href="/ring-sales"><i className="bi bi-graph-up"></i> Ring Sales</a>
                    <a href="/finished-waste" className="active"><i className="bi bi-trash"></i> Finished Waste</a>
                    <a href="/employees"><i className="bi bi-people"></i> Employees</a>
                    <a href="/cash-control"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="/inventory"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="/" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
            </div>

            <div className="r-sidebar">
                <header>
                    <div className="nav-current">
                        <p className="nav">Login</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav-active">Recall order</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                {/* container */}
                <div className="container">
                    <div className="tab-container">
                        <a href="/cash-drop">
                            Recall order
                        </a>                    
                    </div>
                    {/* table */}
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order No.</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Monday, 29 February 2024</td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Monday, 29 March 2024</td>
                                </tr>
                                <tr>
                                    <td>003</td>
                                    <td>Monday, 29 April 2024</td>
                                </tr>
                                <tr>
                                    <td>004</td>
                                    <td>Monday, 29 August 2024</td>
                                </tr>
                                <tr>
                                    <td>005</td>
                                    <td>Monday, 29 December 2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="buttons">
                        <button type="button" id="ok-btn">Ok</button>
                        <a href="/ring-sales">
                            <button type="button" id="cancel-btn">Cancel</button>
                        </a>
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
            </div>
        </div>
    );
};

export default RecallOrder;