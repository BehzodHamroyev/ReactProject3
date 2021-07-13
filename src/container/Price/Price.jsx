import React, {Component} from 'react';
import Title from '../../componenta/Title/Title';
import Template from './Rectangle (12).svg'
import './Price.css'
const data = {
    type: "info",
    subTitle: "Ready to use job templates to help you with the hardest parts of creating a job post.",
    title: "Kickstart hiring with Homerun templates.",
    buttonName: "Explore all templates"
}
class Price extends Component {
    render() {
        return (
            <div className="Price container">
                <div className="New mb-4">New</div>
                <Title data={data}/>
                <img className="w-100 my-5" src={Template}
                    alt=""/>
            </div>
        )
    }
}

export default Price
