import React, {Component} from 'react';
import './Footer.css';
import Brend from '../Brend.png';
import Links from '../../componenta/Links/Links';
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';
import Twiter from './Group 11.svg';
import Instagram from './Group 15.svg';
import Linkdin from './Shape.svg';
const data = [
    {
        title: "Product",
        links: ["Hire", "Create", "Templates", "All features"]
    },
    {
        title: "Learn",
        links: ["Blog", "Help Center"]
    },
    {
        title: "About Homerun",
        links: ["About us", "We're hiring", "Contact us"]
    },
    {
        title: "Art of Work newsletter",
        links: [],
        text: "Receive must-read articles and trends on company culture, hiring and work/life balance."
    }, {
        title: "Pricing",
        links: ["New in Homerun"]
    }, {
        title: "Guides",
        links: [
            "Remote Hiring",
            "Employer Branding",
            "Job Interviewing",
            "Diversity & Inclusion",
            "Attracting Talent",
            "GDPR Hiring"
        ]
    }, {
        title: "Legal",
        links: ["Terms", "Privacy"]
    }

]
// subTitle : {
//     text: "new",
//     color: "danger"
// }
class Footer extends Component {
    render() {
        return (
            <div className="Footer container text-white ">
                <div className="topFooter mb-5 px-5 py-3 d-flex justify-content-between align-items-center">
                    <img className="brend"
                        src={Brend}
                        alt=""/>
                    <button className="btn btn-info">
                        Start free trial
                    </button>
                </div>
                <div className="container">
                    <div className="row">
                        {
                        data.map((link, indx) => {
                            return (
                                <Links data={link}/>
                            )
                        })
                    }
                        <div className="col-6 col-md-3">
                            <p className="text-white text-start fs-5">Sign up to our newsletter</p>
                            <div>
                                <InputGroup>
                                    <Input/>
                                    <InputGroupAddon addonType="append">
                                        <Button color="secondary">Submit</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                            <div className="icon mt-5">
                                <span  className="Instagram me-3"><img src={Instagram} alt="" /></span>
                                <span className="Linkdin me-3"><img  src={Linkdin} alt="" /></span>
                                <span className="twiter"><img  src={Twiter} alt="" /></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
