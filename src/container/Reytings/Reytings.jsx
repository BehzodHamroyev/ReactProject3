import React, {Component} from 'react';
import logo1 from './Rectangle (13).svg';
import logo2 from './Rectangle (14).svg';
import icon1 from './Rectangle (15).svg';
import icon2 from './😃 🤩.svg';
import './Reytings.css';
import Reyting from '../../componenta/Reyting/Reyting'
const data = [
    {
        logo: logo1,
        icon: icon1,
        reyting: "4.5",
        comment: "Average review on Capterra, independent review site"
    }, {
        logo: logo2,
        icon: icon2,
        reyting: "98,8%",
        comment: "Average review on Capterra, independent review site"
    }
]
class Reytings extends Component {
    render() {
        return (
            <div className="container mt-5 bg-white py-5 ">
                <div className="row ">
                {
                data.map((v, i) => {
                    return (
                        <Reyting data={v}/>
                    )
                })
            } </div>
            </div>
        )
    }
}

export default Reytings
