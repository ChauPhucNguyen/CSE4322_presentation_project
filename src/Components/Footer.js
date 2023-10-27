/* VN */
import React from 'react';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="containter">
                <div className="row">
                    {/* Column1 */}
                    <div className="column">
                        <h4><strong>Team CPSV</strong></h4>
                        <ul className="list-unstyled">
                            <font size = "2">
                            <li>Chau Nguyen</li>
                            <li>Phu Nguyen</li>
                            <li>Santiago Hernandez</li>
                            <li>Vincent Nguyen</li>
                            </font>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="column">
                        <a href="https://github.com/Vidssk/Project3">
                        <img 
                            src="github_logo.png" 
                            alt=""
                            width = "20"
                            align = ""
                        />
                        </a>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} CPSV INC | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;