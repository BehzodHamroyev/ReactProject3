import React, {Component} from 'react';
import Templateimg from './TemplateImg';
import TemplateContent from './TemplateContent';
import img1 from './Rectangle (7).svg';
import img2 from './Rectangle (8).svg';
const data = [
    {
        color: "success",
        img: img1,
        topTitle: "Hire",
        title: "An all-in-one tool for your entire team.",
        subTitle: "No more ping-ponging between emails, spreadsheets, and other apps. Bring everything together in one place.",
        subImg: 'All your jobs, candidates, messages and notes in one place.'
    }, {
        color: "warning",
        img: img2,
        topTitle: "Create",
        title: "An experience candidates simply love.",
        subTitle: "No more ping-ponging between emails, spreadsheets, and other apps. Bring everything together in one place.Treat candidates with a rich career site, beautiful job posts, tailored application forms and faster response times.",
        subImg: 'Career page created with Homerun.'

    }
]
class TemplateContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <TemplateContent data={
                        data[0]
                    }/>
                    <Templateimg data={
                        data[0]
                    }/>

                    <TemplateContent data={
                        data[1]
                    }/>
                    <Templateimg data={
                        data[1]
                    }/>
                </div>
            </div>
        )
    }
}

export default TemplateContainer
