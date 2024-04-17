import * as React from "react";
import './style.css';

function Partners(){
    return(
        <main>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            </head>
            <div class = "background"> 
                <div class = "selection">
                    <button type="button" class="walk">Walk Partners</button>
                    <button type="button" class="call">Call Partners</button>
                </div>

                <div class = "user">
                    <div class = "profilepic">
                        <span class="dot"></span>
                    </div>
                    <div class = "box"> 
                    {/* <div class = "text"> */}
                        Jane Doe <br/>Female Identifying <br/> Start Location: 0.2 miles away <br/> End Location: 0.35 miles away 
                    {/* </div> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Partners