import React from 'react';
import HomeBar from './HomeBar';
import ApplicationDisplay from './ApplicationDisplay'

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div style={{overflow: "auto"}}>
                <HomeBar/>
                <ApplicationDisplay/>
            </div>
        );
    }
}

export default Home;