import React, {Component} from 'react'
import './Template.css';
class TemplateContent extends Component {
    constructor(props) {
        super(props);
        this.state=props;
        console.log(this.state.data);
       
    }
  

    render() {
        return (
            <div className=" col-12 col-md-6 TemplateContent">
                <div className=" h-100">
                    <p className={
                        `fs-5  text-start text-${
                            this.state.data.color
                        }`
                    }>
                        {
                        this.state.data.topTitle
                    }</p>
                    <h1 className="fs-2 fw-bold mt-2 text-start m-0">
                        {
                        this.state.data.title
                    }</h1>
                    <p className="m-0 text-start">
                        {
                        this.state.data.subTitle
                    }</p>
                    <button className="text-start text-dark btn btn-light my-3">Learn More</button>
                </div>
            </div>
        )
    }
}

export default TemplateContent
