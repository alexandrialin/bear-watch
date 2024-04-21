'use client'

import * as React from "react";
import './style.css';


function Partners(){

    const [page, setPage] = React.useState("walk");

    const walkHit = () => {
        setPage("walk");
      };

    const callHit = () => {
        setPage("call");
      };

    const showWalkPartners = () => {
        return(
            <div class = "users">
                <div class = "user">
                    <div class = "profilepic">
                        <span class="dot"></span>
                    </div>
                    <div class = "box"> 
                        Jane Doe <br/>Female Identifying <br/> Start Location: 0.2 miles away <br/> End Location: 0.35 miles away 
                    </div>
                </div>
            </div>
        )
    }

    const showCallPartners = () => {
        return(
            <div class = "users">
                <div class = 'user'>
                    <div class = "profilepic">
                        <span class="dot"></span>
                    </div>
                    <div class = "box"> 
                        Jane Doe <br/>Female Identifying <br/> Human 
                    </div>
                </div>
                <div class = 'user'>
                    <div class = "profilepic">
                        <span class="dot"></span>
                    </div>
                    <div class = "box"> 
                        Bob Smith <br/>Male Identifying <br/> Human 
                    </div>
                </div>
            </div>
        )
    }
      

    return(
        <main>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            </head>
            <div class = "background"> 
                <div class = "selection">
                    <button type="button" onClick = {walkHit} class={page == "walk" ? "selected" : "notselected"}>Walk Partners</button>
                    <button type="button" onClick = {callHit} class={page == "call" ? "selected" : "notselected"}>Call Partners</button>
                </div>
                {page == "walk" ? showWalkPartners() : showCallPartners()}
                
            </div>
        </main>
    )
}

export default Partners