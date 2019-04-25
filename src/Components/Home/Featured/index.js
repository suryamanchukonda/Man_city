import React from 'react';
import Stripes from './Stripes';
import Text from './Text';

const featured = () => {
    return (
        <div className="featured_wrapper" style={{background: "#0d1831"}}>
            <Stripes/>
            <Text/>
        </div>
    );
};

export default featured;