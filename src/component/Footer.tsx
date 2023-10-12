import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4" style={{backgroundColor :  '#16202c'}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-white">ATS</h5>
                <p className="text-white">Here you can use rows and columns to organize your footer content.
                Here you can use rows and columns to organize your footer content.
                Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-white">Contract</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Tel : 0968869014</a></li>
                    <li><a href="#!">LineID : benzwarza</a></li>
                    <li><a href="#!">https://www.facebook.com/cherdpong.peungtuan</a></li>
                    <li><a href="#!">Bangkok</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>
export default Footer