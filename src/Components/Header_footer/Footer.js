import React from 'react';
import { CityLogo } from '../Ui/Icons';

const footer = () => {
    return (
        <footer className="bck_blue" style={{width: "1280px"}}>
            <div className="footer_logo">
                <CityLogo
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Manchester city 2018.All rights reserved.
            </div>
            
        </footer>
    );
};

export default footer;