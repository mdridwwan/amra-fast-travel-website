import React from 'react';

const Footer = () => {
    return (
        <div className="mt-5">
            <div style={{ backgroundColor: '#024d1d', color: 'white', padding: '30px' }} class="app">
                <div className="container">
                    <div class="row">
                        <div class="col-4 sm-12">
                            <div style={{ textAlign: 'left' }}>
                                <h2>Contact info</h2>
                                <p>Email: mdridwan583011@gmail.com</p>
                                <p>Phone: 01648035776</p>
                                <small>Tel: 00321442</small>
                            </div>
                        </div>
                        <div class="col-4 sm-12">
                            <div>
                                <h2>Address</h2>
                                <h6>Amra Fast, Shahid Minar Tower </h6>
                                <p>Narayanganj</p>
                                <p>Dhaka.Bangladesh</p>
                            </div>
                        </div>
                        <div class="col-4 sm-12">
                            <h2>Tourist Partners</h2>
                            <p>Canada, Austriala, SouthAfrica <br />
                            Island, India, America</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                </div>
               
                <div class="fs-5 text-uppercase pt-3 border-top">
                    <p>@CopyRights  AMR_MART Travel Company.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;