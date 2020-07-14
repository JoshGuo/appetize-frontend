import React from 'react';
import {Container} from 'react-materialize';

class Nav extends React.Component {
    render() {
        let css={
            height: "100%",
            width: "100%",
        }

        return(
            <div className={'teal lighten-4'} style={{width: "350px", height: "100%"}}>
                <div className={'teal lighten-3'} style={{width: "350px", height: "100px", textAlign: "center", lineHeight: "100px"}}>
                    <div style={{display: "inline-block", fontSize: "30px", margin: "0"}}>
                        <h3>Appetize</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;