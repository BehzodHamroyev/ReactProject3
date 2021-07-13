import React, {Component} from 'react';
import './Home.css';
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';



class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>Where hiring comes together.</h1>

                <div className="Homeinput">
                    <p className="mt-5">Everything you need to organise your hiring and make a great impression.</p>
                    <InputGroup>
                        <Input/>
                        <InputGroupAddon addonType="append">
                            <Button color="info">Start free trial</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <p className="mt-5 text-secondary">Join thousands of teams hiring with Homerun</p>
              
            </div>
        )
    }
}
export default Home;

