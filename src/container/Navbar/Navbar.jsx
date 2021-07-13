import React, {Component} from 'react';
import './Navbar.css';
import Brend from '../BrendBlack1.png';
import Link from '../../componenta/NavbarComponenta/Link';
import {FaBars, FaTimes} from 'react-icons/fa';
import Zoom from '../../../node_modules/react-reveal/Zoom';
const links = [
    {
        url: "#Product",
        link: 'Product'
    },
    {
        url: "#Templates",
        link: 'Templates',
        new:"new"
    },
    {
        url: "#Pricing",
        link: 'Pricing'
    },
    {
        url: "#Customers",
        link: 'Customers'
    }, {
        url: "#Learn",
        link: 'Learn'
    }
]
export class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        show: true
    };
    showMenu = () => {
        this.setState((state) => {
            return({
                show: !state.show
            })


        })
    }
    render() {
        return (
            <div className="Navbar shadow flex-wrap px-5 container-fluid py-2">
                <img className="logo"
                    src={Brend}
                    alt=""/>
                <ul className="menu d-none d-lg-flex">
                    {
                    links.map((link, index) => {
                        return (
                            <Link url={
                                    `${
                                        link.url
                                    }`
                                }
                                link={
                                    `${
                                        link.link
                                    }`

                                } new={`${link.new}`}/>
                        )

                    })
                } </ul>

                <div className="buttonGroup d-none d-lg-flex">
                    <button className="btn btn-light text-dark me-3">Log in</button>
                    <button className="btn btn-info">Start free trial</button>
                </div>
                <div className='d-lg-none bars'>
                    <FaBars className={
                            `${
                                !this.state.show && 'd-none' || ""
                            }`
                        }
                        onClick={
                            this.showMenu
                        }/>
                    <FaTimes className={
                            `${
                                this.state.show && 'd-none' || ""
                            }`
                        }
                        onClick={
                            this.showMenu
                        }/>
                </div>
                <Zoom>
                    <ul className={
                        `menu1 w-100 ${
                            this.state.show && "d-none" || ""
                        } d-lg-none`
                    }>
                        {
                        links.map((link, index) => {
                            return (
                                <Link onClick={this.showMenu} className="mt-3"
                                    url={
                                        `${
                                            link.url
                                        }`
                                    }
                                    link={
                                        `${
                                            link.link
                                        }`
                                    } new={`${link.new}`}/>
                            )

                        })
                    } </ul>
                </Zoom>


            </div>
        )
    }
}

export default Navbar
