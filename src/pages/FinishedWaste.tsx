import React from 'react';
import '../styles/finished-waste.css';

const FinishedWaste: React.FC = () => {
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
                    <a href="../pages/finished-waste.html" className="active"><i className="bi bi-trash"></i> Finished Waste</a>
                    <a href="../pages/employees.html"><i className="bi bi-people"></i> Employees</a>
                    <a href="../pages/cash-control.html"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="../pages/inventory.html"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="../index.html" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
            </div>{/* Left sidebar end */}

            {/* Right sidebar */}
            <div className="r-sidebar">
                <header>
                    <div className="nav-current">
                        <p className="nav">Login</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav-active">Finished Waste</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                {/* section 1 */}
                <section className="main-container">
                    <div className="top-categories">
                        <a href="#">
                            <button className="top-btn"><i className="bi bi-list"></i> Menu</button>
                        </a>
                        <a href="#">
                            <button className="top-btn"><i className="bi bi-egg-fried"></i> Breakfast</button>
                        </a>
                        <a href="#">
                            <button className="top-btn"><i className="bi bi-layout-sidebar-reverse"></i> Side</button>
                        </a>
                        <a href="#">
                            <button className="top-btn"><i className="bi bi-basket"></i> Non-Food</button>
                        </a>
                        <a href="#">
                            <button className="top-btn"><i className="bi bi-plus-circle"></i> Add-On</button>
                        </a>
                    </div>
                    {/* option */}
                    <div className="options">
                        <div className="divider">
                            <i className="bi bi-star"></i>
                            <h2>Choose your option</h2>
                        </div>
                        <div className="items">
                            <div className="items-row1">
                                <button id="BLT" name="BLT">BLT</button>
                                <button id="btnHAM">HAM</button>
                                <button id="btnCHICKENSLICE">CHICKENSLICE</button>
                                <button id="btnMEATBALL">MEATBALL</button>
                            </div>
                            <div className="items-row2">
                                <button id="btnROASTBEEF">ROASTBEEF</button>
                                <button id="btnBBQ">BBQ</button>
                                <button id="btnBULGOGI">BULGOGI</button>
                                <button id="btnTERIYAKI">TERIYAKI</button>
                            </div>
                            <div className="items-row3">
                                <button id="btnSANDWICHMELT">SANDWICHMELT</button>
                                <button id="btnTUNA">TUNA</button>
                                <button id="btnHAM&CHICK">HAM&CHICK</button>
                                <button id="btnALLSTAR">ALLSTAR</button>
                            </div>
                        </div>
                    </div>
                    {/* action */}
                    <div className="actions">
                        <div className="controls">
                            <div className="quantity">
                                <button className="item-correct">Item correct</button>
                                <button className="plus-quantity">Quantity<i className="bi bi-plus"></i></button>
                                <button className="sub-quantity">Quantity<i className="bi bi-dash"></i></button>
                            </div>
                            
                            {/* add id to input to make it easier to manage */}
                            <div id="waste-list" className="display">
                                <div className="print-area">
                                    <div className="print-order">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className="tb-left">Name</td>      <td className="tb-right">Price</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="tb-left">XXXXXXXXXX</td>           <td className="tb-right">1XXX.X</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="checkout">
                            <div className="column1-btn">
                                <button className="discount-btn">Discount<i className="bi bi-percent"></i></button>
                                <button className="yellow-btn void-btn">Void Transaction</button>
                                <button className="yellow-btn finished-waste-btn">Finished Waste</button>
                                <button className="yellow-btn reprint-btn">Reprint Recipe</button>
                            </div>
                            <div className="column2-btn">
                                <button className="yellow-btn waste-btn">Waste<i className="bi bi-trash3"></i></button>
                                <button className="yellow-btn save-order-btn">Save Order</button>
                                <button className="yellow-btn recall-btn">Recall Order</button>
                                <button className="home-btn"><i className="bi bi-house-door"></i></button>
                            </div>
                        </div>
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

export default FinishedWaste;
