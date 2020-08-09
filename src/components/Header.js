import React from 'react';
import Anim from '../assets/FullAnim.mp4';
const Header = () =>{
    return(
        <section id="header_section">
            <div className="container text-center p-4">
                <video autoPlay src={Anim} alt="Logo Here" height="50%" width="20%" className="img-fluid"/>
            </div>
            <br/>
            <br/>
        </section>
    );
}

export default Header;