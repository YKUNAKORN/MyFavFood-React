import React from 'react';
import '../styles/cash-control.css';

const CashControl: React.FC = () => {
    return (
        <div className="main-content">
            {/* Main content */}
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
                <header>
                    <div className="nav-current">
                        <p className="nav">Login</p>
                        <p className="nav">&gt;</p>
                        <p className="nav-active">Cash control</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                {/* top menu bar */}
                <div className="contrainer">
                    {/* section 1 */}
                    <div className="section1">
                        <div className="sub-container1">
                            <h2>Cash control</h2>
                            <a href="/overview">
                                <button className="home-btn"><i className="bi bi-house-door"></i>Home</button>
                            </a>
                        </div>
                    </div>
                    {/* section 2 */}
                    <div className="section2">
                        <div className="menu-btn">
                            {/* row1 */}
                            <div className="menu-row1">
                                <a href="/start-day" className="start-day-1 eff">
                                    <div className="start-day-2">
                                        <div className="start-day-title">
                                            <h3>Start Day</h3>
                                            <p>Start day button</p>
                                        </div>
                                        <i className="bi bi-calendar"></i>
                                    </div>
                                </a>

                                <a href="/end-day" className="end-day-1 eff">
                                    <div className="end-day-2">
                                        <div className="end-day-title">
                                            <h3>End Day</h3>
                                            <p>End day button</p>
                                        </div>
                                        <i className="bi bi-calendar-check"></i>
                                    </div>
                                </a>
                            </div>
                            {/* row2 */}
                             <div className="menu-row2">
                                <a href="/cash-in-drawer" className="cash-in-drawer-1 eff">
                                    <div className="cash-in-drawer-2">
                                        <div className="cash-in-drawer-title">
                                            <h3>Cash in <br /> Drawer</h3>
                                            <p>Cash in  drawer button</p>
                                        </div>
                                        <i className="bi bi-coin"></i>
                                    </div>
                                </a>

                                <a href="/cash-drop" className="cash-drop-1 eff">
                                    <div className="cash-drop-2">
                                        <div className="cash-drop-title">
                                            <h3>Cash Drop</h3>
                                            <p>Cash drop button</p>
                                        </div>
                                        <i className="bi bi-cash-stack"></i>
                                    </div>
                                </a>
                            </div>
                            {/* row3 */}
                            <div className="menu-row3">
                                <a href="/reprint" className="reprint-recipt-1 eff">
                                    <div className="reprint-recipt-2">
                                        <div className="reprint-recipt-title">
                                            <h3>Reprint <br /> Recipt</h3>
                                            <p>Reprint recipt button</p>
                                        </div>
                                        <i className="bi bi-printer"></i>
                                    </div>
                                </a>

                                <a href="/void" className="void-transaction-1 eff">
                                    <div className="void-transaction-2">
                                        <div className="void-transaction-title">
                                            <h3>Void <br /> Transaction</h3>
                                            <p>Void transaction button</p>
                                        </div>
                                        <i className="bi bi-file-earmark-x"></i>
                                    </div>
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
                </footer>{/* Footer end */}

            </div>{/* Right sidebar end */}

            {/* Main content end */}
        </div>
    );
};

export default CashControl;