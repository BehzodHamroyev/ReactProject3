import React, {Component} from 'react';
import './Templates.css';
import TemplateContainer from '../../componenta/Template/TemplateContainer';
class Templates extends Component {
    render() {
        return (
            <div id="##Templates" className="Templates w-100">
                <TemplateContainer/>
            </div>
        )
    }
}

export default Templates
