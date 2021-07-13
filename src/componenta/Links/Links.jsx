import React, {Component} from 'react';
import './Links.css';

export class Links extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        console.log( this.props.data.links);
    }
    render() {
        return (
                <div className="col-6 col-md-3 ">
                    <p className='text-white text-start fs-4 my-3'>
                        {this.props.data.title}
                    </p>
                 
                   {
                        this.props.data.links.map((link,index)=>{return(<a href="#" className="text-secondary mx-0 px-0 fs-5" >{link}</a>)})
                    }
                    <p className={`${this.props.data.text && "d-block" || ""} text-white bg-info`}>{this.props.text}</p>
                   
                 </div>
        )
    }
}

export default Links
