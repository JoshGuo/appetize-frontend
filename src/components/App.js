import React from 'react';
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            uid: "5f0b3db982fed126801e69d6"
        }
    }

    componentDidMount() {
        this.loadUserData();
    }

    loadUserData() {
        axios.get(`http://localhost:5000/users/${this.state.uid}`)
            .then(res => {
                console.log(res.data);
                this.setState({loading:false});
            });
    }

    //Needs to grab user info / prompt for login if not
    render() {
        if(this.state.loading) {
            return(
                <div className="red lighten-3" style={{height: "100%", width: "100%"}}>Loading...</div>
            );
        }

        return(
            <div style={{display: "flex", height: "100%", width: "100%", margin: '0'}}>
                <div style={{height: "100%", width: "350px", maxWdith: "50%", padding: "0px"}}>
                    <Nav/>
                </div>
                <div style={{height: "100%", width: "100%"}}>
                    <div style={{margin: "auto", padding: "0 3rem"}}>
                        <Switch>
                            <Route path='/' component={Home}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;