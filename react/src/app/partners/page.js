'use client'

import * as React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Partners(){

    const [queryParam, setQueryParam] = React.useState(null);

    React.useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const paramValue = queryParams.get('startLat');
        setQueryParam(paramValue);
      }, []);

    console.log(queryParam);
    const [page, setPage] = React.useState("walk");
    const [userList, setUserList] = React.useState([]);

    const walkHit = () => {
        setPage("walk");
      };

    const callHit = () => {
        setPage("call");
      };

    const showWalkPartners = () => {
        return(
            <div className = "users">
                <div className = "user">
                    <div className = "profilepic">
                        <span className="dot"></span>
                    </div>
                    <div className = "box"> 
                        Jane Doe <br/>Female Identifying <br/> Start Location: 0.2 miles away <br/> End Location: 0.35 miles away 
                    </div>
                </div>
            </div>
        )
    }

    const showCallPartners = () => {
        return(
            <div className = "users">
                <div className = 'user'>
                    <div className = "profilepic">
                        <span className="dot"></span>
                    </div>
                    <div className = "box"> 
                        Jane Doe <br/>Female Identifying <br/> Human 
                    </div>
                </div>
                <div className = 'user'>
                    <div className = "profilepic">
                        <span className="dot"></span>
                    </div>
                    <div className = "box"> 
                        Bob Smith <br/>Male Identifying <br/> Human 
                    </div>
                </div>
            </div>
        )
    }

    //Handing User list
      

    return(
        <main>
            <div className = "background"> 
                <div className = "selection">
                    <button type="button" onClick = {walkHit} className={page == "walk" ? "selected" : "notselected"}>Walk Partners</button>
                    <button type="button" onClick = {callHit} className={page == "call" ? "selected" : "notselected"}>Call Partners</button>
                </div>
                {page == "walk" ? showWalkPartners() : showCallPartners()}
                
            </div>
        </main>
    )
}

export default Partners