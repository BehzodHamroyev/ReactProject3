import React, {Component} from 'react';
import './Customer.css';
import Title from '../../componenta/Title/Title';
import LogoCustomer from './Rectangle (9).svg';
import ClientImg from './Rectangle (10).svg';
import Logo from './Rectangle (11).svg';
const data = {
    type: "outline-info",
    subTitle: "Homerun customers share a passion for culture, design and innovation. We all agree hiring can be more meaningful and personal.",
    title: "Join the club.",
    buttonName: "About our customers"
}
export class Customer extends Component {

    render() {
        return (
            <div className="Customer  container">
                <div className="row d-flex  justify-content-center flex-column align-items-center">
                    <img className="img"
                        src={LogoCustomer}
                        alt=""/>
                    <Title data={data}/>
                    <div className="container mt-4">
                        <div className="row m-0 container">
                            <div className="col-12 col-md-6 p-0"><img  className="h-100 w-100" src={ClientImg}
                                    alt=""/></div>
                            <div className="col-12 col-md-6  p-0">
                                <div className="w-100 container  clientInfo h-100 d-flex justify-content-start align-items-start ">
                                    <img className="my-5" src={Logo}
                                        alt=""/>
                                    <p className="subTitle my-4">
                                        “You don't need to be a pro in HR or even in Homerun to be able to use it. It's so easy that anyone in the team can figure it out.”
                                    </p>
                                    <p >
                                        Isabel Machielse
                                        <br/>
                                        People & Culture Coordinator
                                    </p>
                                    <button className="btn btn-outline-info">Read customer story</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        )
    }
}
export default Customer
