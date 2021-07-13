import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    constructor (props){
        super(props)
        this.state=props;
    }
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column">
                <p className="fs-3 fw-bold">{this.props.data.title}</p>
                <p className="fw-bold subTitle" >{this.props.data.subTitle}</p>
                <button className={`btn mt-5 btn-${this.props.data.type}`}>{this.props.data.buttonName}</button>
            </div>
        )
    }
}

export default   Title;
