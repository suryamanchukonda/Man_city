import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move';

class Stripes extends Component {

    showStripes = () => (
        <div>
            Stripes
        </div>
    )
    
    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        );
    }
}

export default Stripes;