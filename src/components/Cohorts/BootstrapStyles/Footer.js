import '../../../assets/css/styles.css'
import React from "react";

function Footer() {
  return (
    <div >
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Manchester Spaces Deansgate,  
                            <br />
                            125 Deansgate,
                            <br/>
                            Manchester, M3 2BY
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Follow Us</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/digital.futures2021"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/digitalfutures0"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/company/digital-futures2021/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/digital_futures/"><i className="fab fa-fw fa-instagram"></i></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Digital Futures</h4>
                        <p className="lead mb-0">
                            We help organisations build technology teams representative of society
                            <br/>
                            <a href="https://digitalfutures.com/">Go to Digital Futures </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Your Website 2021</small></div>
    </div>
    </div>
  );
}

export default Footer;