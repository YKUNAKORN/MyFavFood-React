import React from 'react';
import '../styles/information.css';
import unknowProfile from '../assets/images/Profile-img/unknow-profile.jpg';

const Information: React.FC = () => {
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
                    <a href="/employees" className="active"><i className="bi bi-people"></i> Employees</a>
                    <a href="/cash-control"><i className="bi bi-cash"></i> Cash Control</a>
                    <a href="/inventory"><i className="bi bi-box-seam"></i> Inventory</a>
                </nav>
                <a href="/" className="signout"><i className="bi bi-box-arrow-right"></i> Sign Out</a>
            </div>{/* Left sidebar end */}

            {/* Right sidebar */}
            <div className="r-sidebar">
                <header>
                    <div className="nav-current">
                        <p className="nav">Employees</p>
                        <p className="nav">{'>'}</p>
                        <p className="nav-active">Information</p>
                    </div>
                    <div className="user-info">
                        Guest01
                        <span className="role">Admin</span>
                    </div>
                </header>
                {/* main container */}
                <section className="main-container">
                    {/* section 1 */}
                    <div className="section1">
                        <div className="top-title">
                            <p className="nav-text-active">Information</p>
                            <p className="nav-text">{'>'}</p>
                            <p className="nav-text">Nicolas Jackson</p>
                        </div>
                        <a href="/employees">
                            <button className="back-btn"><i className="bi bi-caret-left"></i>Back</button>
                        </a>
                    </div>
                    {/* section 2 */}
                    <div className="section2">
                        {/* left-section 2 */}
                        <div className="left-section2">
                            <img src={unknowProfile} alt="Unknown" className="profile-img" />
                            
                            
                            <div>
    {/*                             
                                <p><strong>ID: </strong> <span id="emp-id">Loading...</span></p>
                                <p><strong>Name:</strong>     <span id="emp-name">Loading...</span></p>
                                <p><strong>NickName:</strong> <span id="emp-nickname">Loading...</span></p>
                                <p><strong>Position:</strong> <span id="emp-position">Loading...</span></p>
                                <p><strong>Adress:</strong> <span id="emp-address">Loading...</span></p>
                                <p><strong>Gender:</strong> <span id="emp-gender">Loading...</span></p>
                                <p><strong>Gmail:</strong> <span id="emp-email">Loading...</span></p>
                                <p><strong>Phone:</strong> <span id="emp-phone">Loading...</span></p>
                                <p><strong>Contract:</strong> <span id="emp-contract">Loading...</span></p> */}
                                
                                
                                <div className="employee-table-container">
                                    <table className="employee-table">
                                        <tbody>
                                        {/* <tr>
                                            <th>ID</th>
                                            <td id="emp-id">Loading...</td>
                                        </tr> */}
                                        <tr>
                                            <th>Name</th>                   <td id="emp-name">Loading...</td>
                                        </tr>
                                        <tr>
                                            <th>NickName</th>               <td id="emp-nickname">Loading...</td>
                                        </tr>
                                        <tr>
                                            <th>Position</th>               <td id="emp-position">Loading...</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>                <td id="emp-address">Loading...</td>
                                        </tr>
                                        <tr>
                                            <th>Gender</th>                 <td id="emp-gender">Loading...</td>
                                        </tr>
                                        <tr>
                                            <th>Gmail</th>                  <td id="emp-email">Loading...</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>                  <td id="emp-phone">Loading...</td>
                                        </tr>
                                        <tr>
                                            <th>Contract</th>               <td id="emp-contract">Loading...</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                

                            
                            {/* <table>
                                <thead>
                                    <tr>
                                        <td class="tb-left">First name</td>             <td  id="emp-id" class="tb-right">Loading...</td>
                                    </tr>
                                    <tr>
                                        <td class="tb-left">Last Name</td>              <td id="emp-name "class="tb-right">Chuawong</td>
                                    </tr>
                                    <tr>
                                        <td class="tb-left">Gender</td>                 <td class="tb-right">Male</td>
                                    </tr>
                                    <tr>
                                        <td class="tb-left">Address</td>                <td class="tb-right">Bangkok</td>
                                    </tr>
                                    <tr>
                                        <td class="tb-left">Tel</td>                    <td class="tb-right">0829099626</td>
                                    </tr>
                                    <tr>
                                        <td class="tb-left">Job position</td>           <td class="tb-right">Manager</td>
                                    </tr>
                                    <tr>
                                        <td class="tb-left">Contract ID</td>            <td class="tb-right">10001</td>
                                    </tr>
                                    <tr>
                                        <td class="tb-left">Email</td>                  <td class="tb-right">kobchok.ch@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td class="tb-left">Username</td>               <td class="tb-right">Folk</td>
                                    </tr>
                                </thead>
                            </table> */}
                            </div>
                            <a href="/edit-profile" className="edit-profile-button" id="edit-profile-button" >Edit profile</a>
                        </div>
                        
                        {/* right-section 2 */}
                        <div className="right-section2">
                            <div className="col-md-8">
                                <div className="history-card">
                                    <h5 className="mb-3">History</h5>
                                    <p className="text-muted">Working Summary</p>

                                        <div className="history-box day-off">
                                            <i className="bi bi-calendar-x"></i>
                                            <h6>8 Days</h6>
                                            <p>Total day off</p>
                                        </div>
                                        <div className="history-box leave-day">
                                            <i className="bi bi-calendar2-minus"></i>
                                            <h6>2 Days</h6>
                                            <p>Total leave day</p>
                                        </div>
                                        <div className="history-box work-day">
                                            <i className="bi bi-calendar-check"></i>
                                            <h6>22 Days</h6>
                                            <p>Total day work</p>
                                        </div>

                                </div>
                                {/* 
                                <div class="performance-card">
                                    <h5>Performance</h5>
                                    <canvas id="performanceChart"></canvas>
                                </div>
                                */}
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

export default Information;
