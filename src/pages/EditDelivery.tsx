import React from 'react';
import '../styles/edit-delivery.css';

const EditDelivery: React.FC = () => {
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
                        <p className="nav">Date</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav-active">Edit Delivery</p>
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
                        <h2>Edit delivery</h2>
                        <div className="current-date">
                            Date : Satturday, 9 November 2024
                        </div>
                    </div>
                    <div className="container2">
                        <div className="table-container2">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>QTY</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>N/A</td>      <td>N/A</td>      <td>N/A</td>     <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>N/A</td>      <td>N/A</td>      <td>N/A</td>     <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>N/A</td>      <td>N/A</td>      <td>N/A</td>     <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>N/A</td>      <td>N/A</td>      <td>N/A</td>     <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>N/A</td>      <td>N/A</td>      <td>N/A</td>     <td>N/A</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>

                        <div className="sidebar">
                            <button className="edit-button">Edit</button>
                            <button className="print-button">Print</button>
                            <div className="nav-buttons">
                                <a href="/date-edit-waste">
                                    <button className="back-btn"><i className="bi bi-caret-left"></i>Back</button>
                                </a>
                                <a href="/overview">
                                    <button className="home-btn"><i className="bi bi-house-door"></i>Home</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Container2 */}
                    {/*
                    <div className="container2">
                        <div className="table-container2">
                            <div id="items-list">
                                {/* Waiting for query items from database * /}
                             </div>
                        </div>

                        <div className="sidebar">
                                <button className="edit-button">Edit</button>
                                <button className="print-button">Print</button>
                            <div className="nav-buttons">
                                <a href="/date-delivery">
                                    <button className="back-btn"><i className="bi bi-caret-left"></i>Back</button>
                                </a>
                                <a href="/overview">
                                    <button className="home-btn"><i className="bi bi-house-door"></i>Home</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    */}
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

export default EditDelivery;
