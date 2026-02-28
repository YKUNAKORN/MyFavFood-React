import React from 'react';
import '../styles/sign-up.css';
import forgotPasswordBg from '../assets/images/BG/Forgor-passwordBG.jpg';

const SignUp: React.FC = () => {
    return (
        <div className="container">

            {/* Left sidebar */}
            <div className="l-sidebar">
                <div className="sign-up">
                    <h1 className="title">MyFavFood</h1>
                    <h4>Sign up</h4>
                    <p className="p-detail">
                        Enter your detail down below to create your account and get startd.
                    </p>
                    <form id="sign-upForm" action="/signup" method="post">
                        <div className="input-group">
                            <p>First name</p>
                            <label htmlFor="first-name">
                            <i className="bi bi-fonts icon"></i>
                                <input type="text" id="first-name" name="emp_fname" placeholder="Enter your first name here" required />
                            </label>

                            <p>Last name</p>
                            <label htmlFor="last-name">
                            <i className="bi bi-fonts icon"></i>
                                <input type="text" id="last-name" name="emp_lname" placeholder="Enter your last name here" required />
                            </label>

                            <p>Nickname</p>
                            <label htmlFor="username">
                            <i className="bi bi-envelope icon"></i>
                                <input type="text" id="username" name="emp_uname" placeholder="Enter your nickname here" required />
                            </label>
                            
                            <p>Gender</p>
                            <label htmlFor="gender-input">
                            <i className="bi bi-gender-male icon"></i>
                            <input list="gender" id="gender-input" name="emp_gender" placeholder="Select your gender" required />
                                <datalist id="gender">
                                    <option value="Male" />
                                    <option value="Female" />
                                </datalist>
                            </label>

                            <p>Address</p>
                            <label htmlFor="province">
                            <i className="bi bi-pin-map icon"></i>
                            <input list="province-options" name="address" id="province" placeholder="Select your province" required />
                                <datalist id="province-options">
                                    <option value="Bangkok" />
                                    <option value="Samut Prakan" />
                                    <option value="Nonthaburi" />
                                    <option value="Pathum Thani" />
                                    <option value="Phra Nakhon Si Ayutthaya" />
                                    <option value="Ang Thong" />
                                    <option value="Lopburi" />
                                    <option value="Sing Buri" />
                                    <option value="Chai Nat" />
                                    <option value="Saraburi" />
                                    <option value="Chonburi" />
                                    <option value="Rayong" />
                                    <option value="Chanthaburi" />
                                    <option value="Trat" />
                                    <option value="Chachoengsao" />
                                    <option value="Prachinburi" />
                                    <option value="Nakhon Nayok" />
                                    <option value="Sa Kaeo" />
                                    <option value="Nakhon Ratchasima" />
                                    <option value="Buri Ram" />
                                    <option value="Surin" />
                                    <option value="Sisaket" />
                                    <option value="Ubon Ratchathani" />
                                    <option value="Yasothon" />
                                    <option value="Chaiyaphum" />
                                    <option value="Amnat Charoen" />
                                    <option value="Nong Bua Lamphu" />
                                    <option value="Khon Kaen" />
                                    <option value="Udon Thani" />
                                    <option value="Loei" />
                                    <option value="Nong Khai" />
                                    <option value="Maha Sarakham" />
                                    <option value="Roi Et" />
                                    <option value="Kalasin" />
                                    <option value="Sakon Nakhon" />
                                    <option value="Nakhon Phanom" />
                                    <option value="Mukdahan" />
                                    <option value="Chiang Mai" />
                                    <option value="Lamphun" />
                                    <option value="Lampang" />
                                    <option value="Uttaradit" />
                                    <option value="Phrae" />
                                    <option value="Nan" />
                                    <option value="Phayao" />
                                    <option value="Chiang Rai" />
                                    <option value="Mae Hong Son" />
                                    <option value="Nakhon Sawan" />
                                    <option value="Uthai Thani" />
                                    <option value="Kamphaeng Phet" />
                                    <option value="Tak" />
                                    <option value="Sukhothai" />
                                    <option value="Phitsanulok" />
                                    <option value="Phichit" />
                                    <option value="Phetchabun" />
                                    <option value="Ratchaburi" />
                                    <option value="Kanchanaburi" />
                                    <option value="Suphanburi" />
                                    <option value="Nakhon Pathom" />
                                    <option value="Samut Sakhon" />
                                    <option value="Samut Songkhram" />
                                    <option value="Phetchaburi" />
                                    <option value="Prachuap Khiri Khan" />
                                    <option value="Chumphon" />
                                    <option value="Ranong" />
                                    <option value="Surat Thani" />
                                    <option value="Phang Nga" />
                                    <option value="Phuket" />
                                    <option value="Krabi" />
                                    <option value="Nakhon Si Thammarat" />
                                    <option value="Trang" />
                                    <option value="Phatthalung" />
                                    <option value="Songkhla" />
                                    <option value="Satun" />
                                    <option value="Pattani" />
                                    <option value="Yala" />
                                    <option value="Narathiwat" />
                                </datalist>
                            </label>

                            <p>Tel</p>
                            <label htmlFor="tel">
                            <i className="bi bi-telephone-plus icon"></i>
                                <input type="tel" id="tel" name="emp_phone" placeholder="0XX-XXX-XXXX" required />
                            </label>

                            <p>Job position</p>
                            <label htmlFor="position-input">
                            <i className="bi bi-person-workspace icon"></i>
                            <input list="position" id="position-input" name="emp_pos" placeholder="Select your job position" required />
                                <datalist id="position">
                                    <option value="Manager" />
                                    <option value="Assistance-manager" />
                                    <option value="Employee" />
                                    <option value="Part-time" />
                                </datalist>
                            </label>

                            <p>Contract ID</p>
                            <label htmlFor="contract-id">
                            <i className="bi bi-fonts icon"></i>
                                <input type="text" id="contract-id" name="contract-id" placeholder="10000" required />
                            </label>

                            <p>Email</p>
                            <label htmlFor="email">
                            <i className="bi bi-envelope icon"></i>
                                <input type="email" id="email" name="emp_email" placeholder="your.email@mail.com" required />
                            </label>

                            <p>Password</p>
                            <label htmlFor="password">
                            <i className="bi bi-lock icon"></i>
                                <input type="password" id="password" name="emp_pass" placeholder="* * * * * * * * * * * * * * *" required />
                            </label>
                        </div>

                        <button type="submit" className="create-account-btn">Create account</button>

                        <div className="divider">
                            <span>OR</span>
                        </div>
                        
                        <div className="home">
                            <p>You want to go back overview?</p>
                            <a href="/overview">Overview</a>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right sidebar */}
            <div className="r-sidebar">
                <img src={forgotPasswordBg} alt="" />
            </div>

        </div>
    );
};

export default SignUp;