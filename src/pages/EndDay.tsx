import React from 'react';
import '../styles/end-day.css';

const EndDay: React.FC = () => {
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
                    <a href="/cash-control" className="active"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="/inventory"><i className="bi bi-box-seam"></i> Inventory</a>
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
                        <p className="nav">Cash control</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav-active">End Day</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                {/* Container */}
                <div className="container">
                    {/* tab nav */}
                    <div className="tab-container">
                        <a href="/start-day">
                            <p>Start Day</p>
                        </a>
                        <a href="/cash-in-drawer">
                            <p>Cash in drawer</p>
                        </a>
                        <a href="/end-day">
                            <p>End day</p>
                        </a>
                        <span></span>
                    </div>
                    {/* form */}
                    <div className="form-container" id="end-day">
                        <form id="dayForm">
                            {/* column 1 */}
                            <div className="input-group column1">
                                <p>Drawer cash</p>
                                <label htmlFor="number">
                                    <input type="number" id="DRAWER_CASH" placeholder="0.00" />
                                    <i className="bi bi-currency-bitcoin"></i>
                                </label>

                                <p>Coin</p>
                                <label htmlFor="number">
                                    <input type="number" id="coin" placeholder="0.00" />
                                    <i className="bi bi-currency-bitcoin"></i>
                                </label>

                                <p>Safe</p>
                                <label htmlFor="number">
                                    <input type="number" id="safe" placeholder="0.00" />
                                    <i className="bi bi-currency-bitcoin"></i>
                                </label>
                            </div>
                            
                            {/* input column right */}
                            <div className="input-group column1">
                                <p>Bread In</p>
                                <label htmlFor="number">
                                    <input type="number" id="BREAD_IN" placeholder="0" />
                                    <i className="bi bi-123"></i>
                                </label>

                                <p>Salad</p>
                                <label htmlFor="text">
                                    <input type="text" id="BREAD_IN" placeholder="Not available" disabled />
                                    <i className="bi bi-123"></i>
                                </label>

                                <p>Other</p>
                                <label htmlFor="text">
                                    <input type="text" id="BREAD_IN" placeholder="Not available" disabled />
                                    <i className="bi bi-123"></i>
                                </label>
                            </div>
                        </form>
                        {/* button */}
                        <div className="buttons">
                            <a href="#">
                                <button type="submit" id="save-btn">Save</button>
                            </a>
                            <a href="/cash-control">
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

export default EndDay;
