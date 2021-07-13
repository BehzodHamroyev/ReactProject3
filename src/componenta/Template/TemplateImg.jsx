import React, { Component } from 'react'
import img1 from './Rectangle (7).svg';
import img2 from './Rectangle (8).svg';

class Templateimg extends Component {
    constructor(props){
        super(props)
        this.state=props;
        console.log(this.state.data);
    }
 
    render() {
        return (
            <div className="col-12 col-md-6 d-flex align-items-start flex-column justify-content-start">
                <img className="img-fluid h-100" src={this.state.data.img} alt="" />
                <p className="fs-6 text-secondary mt-3">{this.state.data.subImg}</p>
            </div>
        )
    }
}

export default Templateimg
