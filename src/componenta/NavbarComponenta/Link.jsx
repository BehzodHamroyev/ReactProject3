import React, {Component} from 'react'
import './Link.css';

export class Link extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        console.log(this.state);
    }
    render() {
        return (
            <li onClick={
                    this.state.onClick
                }
                className={
                    `link ${
                        this.state.className
                    }`
            }>
                <a href={
                    this.state.url
                }>
                    {
                    this.state.link
                }
                    <span className={
                        ` ${
                            (this.state.link=="Templates") && "span" || "d-none"
                        }`
                    }>
                        {
                        this.state.new
                    }</span>
                </a>
            </li>
        )
    }
}

export default Link
