import React from 'react';
import '../styles/inventory.css';

const Inventory: React.FC = () => {
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
                <header>
                    <div className="nav-current">
                        <p className="nav">Login</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav-active">Inventory</p>
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
                            <h2>Inventory</h2>
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
                                <a href="/delivery" className="delivery-1 eff">
                                    <div className="delivery-2">
                                        <div className="delivery-title">
                                            <h3>Delivery</h3>
                                            <p>Delivery button</p>
                                        </div>
                                        <i className="bi bi-bag"></i>
                                    </div>
                                </a>

                                <a href="/date-waste" className="waste-1 eff">
                                    <div className="waste-2">
                                        <div className="waste-title">
                                            <h3>Waste</h3>
                                            <p>Waste button</p>
                                        </div>
                                        <i className="bi bi-trash3"></i>
                                    </div>
                                </a>
                            </div>
                            {/* row2 */}
                            <div className="menu-row2">
                                <a href="/date-delivery" className="edit-delivery-1 eff">
                                    <div className="edit-delivery-2">
                                        <div className="edit-delivery-title">
                                            <h3>Edit <br /> Delivery</h3>
                                            <p>Edit delivery button</p>
                                        </div>
                                        <i className="bi bi-cart-plus"></i>
                                    </div>
                                </a>

                                <a href="/date-waste" className="edit-waste-1 eff">
                                    <div className="edit-waste-2">
                                        <div className="edit-waste-title">
                                            <h3>Edit Waste</h3>
                                            <p>Edit waste button</p>
                                        </div>
                                        <i className="bi bi-recycle"></i>
                                    </div>
                                </a>
                            </div>
                            {/* row3 */}
                            <div className="menu-row3">
                                <a href="/stock" className="stock-1 eff">
                                    <div className="stock-2">
                                        <div className="stock-title">
                                            <h3>Stock</h3>
                                            <p>Stock button</p>
                                        </div>
                                        <i className="bi bi-list-check"></i>
                                    </div>
                                </a>

                                <a href="/new-waste" className="new-waste-1 eff">
                                    <div className="new-waste-2">
                                        <div className="new-waste-title">
                                            <h3>New Waste</h3>
                                            <p>New waste button</p>
                                        </div>
                                        <i className="bi bi-plus-circle"></i>
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

        </div>
    );
};

export default Inventory;
