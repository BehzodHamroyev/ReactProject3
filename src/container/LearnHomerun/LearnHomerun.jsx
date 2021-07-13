import React, { Component } from 'react';
import { FaCheck } from 'react-icons/fa';
import './LearnHomerun.css';
import dog from './Rectangle.png';

 class LearnHomerun extends Component {
    render() {
        return (
           <div className="container">
                <div className="d-flex flex-column rounded mt-5  bg-info text-white justify-content-start align-items-center">
               <img className="mt-5" src={dog} alt="" /> 
               <p className="fs-1 w-50">Start your free Homerun trial today</p>
               <button className="btn-dark py-2 px-5 fs-5 rounded tex-white"> Start free trial </button>
               <p className="d-flex mt-5 container justify-content-center align-items-center">
                   <span className="fs-5 me-5"> <FaCheck  /> Totally free for 15 days</span>
                   <span className="fs-5"> <FaCheck  /> No credit card needed</span>
                   </p>
            </div>
           </div>
        )
    }
}

export default LearnHomerun
