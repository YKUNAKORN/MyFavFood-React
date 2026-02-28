import React from 'react';
import '../styles/cash-drop.css';

const CashDrop: React.FC = () => {
    return (
        <div className="main-content">
            <div className="l-sidebar">
                <a href="../pages/overview.html">
                    <h1 className="logo">MyFavFood</h1>
                </a>
                <nav>
                    <a href="../pages/overview.html"><i className="bi bi-pie-chart"></i> Overview</a>
                    <a href="../pages/ring-sales.html"><i className="bi bi-graph-up"></i> Ring Sales</a>
                    <a href="../pages/finished-waste.html"><i className="bi bi-trash"></i> Finished Waste</a>
                    <a href="../pages/employees.html"><i className="bi bi-people"></i> Employees</a>
                    <a href="../pages/cash-control.html" className="active"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="../pages/inventory.html"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="../index.html" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
            </div>

            <div className="r-sidebar">
                <header>
                    <div className="nav-current">
                        <p className="nav">Login</p>
                        <p className="nav">&gt;</p>
                        <p className="nav">Cash control</p>
                        <p className="nav">&gt;</p>
                        <p className="nav-active">Cash Drop</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                <div className="container">
                    <div className="tab-container">
                        <a href="../pages/cash-drop.html">
                            Cash drop
                        </a>                    
                    </div>
                    <div className="form-container" id="start-day">
                        <form id="dayForm">
                            <div className="input-group column1">
                                <p>Cash amount</p>
                                <label>
                                    <input type="number" id="cash1" placeholder="Enter cash amount" />
                                    <i className="bi bi-currency-bitcoin"></i>
                                </label>
                            </div>
                        </form>
                        <div className="buttons">
                            <button type="button" id="save-btn">Save</button>
                            <a href="../pages/cash-control.html">
                                <button type="button" id="cancel-btn">Cancel</button>
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
                        <p>&copy; MyFavFood Theme by Y.KUNAKORN</p>
                        <p>Power by  Unknown banner</p> <br />
                        <p>MyFavFood Co., Ltd.</p>
                        <p>Tel: +66 83 151 5661</p>
                    </div>
                </footer>{/* Footer end */}
            </div>
        </div>
    );
};

export default CashDrop;