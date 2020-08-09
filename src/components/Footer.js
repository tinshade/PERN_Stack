import React from 'react';


const Footer = () =>{
    return(
        <section id="footer" className="dark text-center">
            <div className="container p-2">
                <br/>
                <br/>
                <br/>
                <h3>Made with <i className="fas fa-heart text-danger"></i> by <a href="https://github.com/tinshade" title='My Github'>Abhishek Iyengar</a>.</h3>
                <div className="container mt-5 p-2">
                    <h6>FOLLOW ME</h6>
                    <hr style={{width: "20%"}}/>
                    <div className="container">
                        <a href="https://github.com/tinshade"><i className="fab p-3 fa-2x fa-github"></i></a>
                        <a href="https://twitter.com/Tin_Shade"><i className="fab p-3 fa-2x fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/abhishek-i-4ba8968a/"><i className="fab p-3 fa-2x fa-linkedin"></i></a>
                        <a href="https://youtube.com/AnnoyingErrors41/"><i className="fab p-3 fa-2x fa-youtube"></i></a>
                    </div>
                </div>
            </div> 
        </section>
    );  

}

export default Footer;