import React, {Component} from 'react';
import './About.css';
import play from './Group 37.svg';
import imgAbout from './Rectangle (6).svg'
export class About extends Component {
    render() {
        return (
            <div className="About w-100">
                <div className="container d-flex justify-content-center align-items-center">
                    <img className="img-fluid position-relative" src={imgAbout}
                        alt=""/>
                    <div className="position-absolute video d-flex justify-content-between align-items-center">
                        <img className="me-3" src={play}
                            alt=""/>
                        Watch: Homerun in 90 seconds
                    </div>
                </div>
            </div>
        )
    }
}

export default About
