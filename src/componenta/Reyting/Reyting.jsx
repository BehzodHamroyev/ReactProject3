import React, {Component} from 'react';
import './Reyting.css';
// import logo1 from './Rectangle (13).svg';
// import logo2 from  './Rectangle (14).svg';
// import icon1  from './Rectangle (15).svg';
// import icon2  from './😃 🤩.svg';

class Reyting extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div className="col-12 col-md-6">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img src={
                            this.props.data.logo
                        }
                        alt=""/>
                    <p>{
                        this.props.data.reyting
                    }</p>
                    <img src={
                            this.props.data.icon
                        }
                        alt=""/>
                    <p>{
                        this.props.data.comment
                    }</p>
                </div>
            </div>
        )
    }
}

export default Reyting
