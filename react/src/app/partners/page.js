"use client";

import * as React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDistance } from 'geolib';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


function Partners(){

    const router = useRouter();

     const [page, setPage] = React.useState("walk");

    const [userList, setUserList] = React.useState([{name: "Jane Doe", startLat: 37.87170, startLon: -122.25339, endLat: 37.87018, endLon: -122.26813, gender: "Female Identifying"},{name: "Bob Smith", startLat: 37.86784, startLon: -122.25761, endLat: 37.87363, endLon: -122.25445, gender: "Male Identifying"}]);

    const walkHit = () => {
        setPage("walk");
      };

    const callHit = () => {
        setPage("call");
      };


    const startLat = localStorage.getItem('startLat');
    const startLon = localStorage.getItem('startLon');
    const startCoords = {latitude: startLat, longitude: startLon}

    const endLat = localStorage.getItem('startLat');
    const endLon = localStorage.getItem('endLon');
    const endCoords = {latitude: endLat, longitude: endLon}
    const name = localStorage.getItem("name");
    const identity = localStorage.getItem("identity");

    React.useEffect(() => {
        setUserList(userList => [...userList, {name: name, startLat: startLat, startLon: startLon, endLat: endLat, endLon: endLon, gender: identity}]);
    },[]);

    

    const userClicked = (partnerType, name, identity, startDis, endDis) => {
        localStorage.setItem('selectedName', name);
        localStorage.setItem('selectedIdentity', identity);
        localStorage.setItem('selectedStart', startDis);
        localStorage.setItem('selectedEnd', endDis);
        localStorage.setItem('partnerType', partnerType);
        router.push('/partner-confirmation');
      };

    const createUsers = () => {
        const divs = [];
        for (let i = 0; i < userList.length; i++) {
            const currUser = userList[i]
            if (currUser.name == localStorage.getItem("name")){
                continue;
            }
            const currStart = {latitude: currUser.startLat, longitude: currUser.startLon}
            const startDistance = getDistance(startCoords, currStart);
            const currEnd = {latitude: currUser.endLat, longitude: currUser.endLon}
            const endDistance = getDistance(endCoords, currEnd);
            divs.push(
              <div className = "user" key={i} onClick={() => userClicked("walk", currUser.name, currUser.gender, startDistance * 0.000621371, endDistance * 0.000621371)}>
                <div className = "user">
                    <div className = "profilepic">
                        <span className="dot"></span>
                    </div>
                    <div className = "box"> 
                        {currUser.name} <br/> {currUser.gender} <br/> Start Location: {startDistance * 0.000621371} miles away <br/> End Location: {endDistance * 0.000621371} miles away 
                    </div>
                </div>
              </div>
            );
          }
          return (
            <div className="users">
              {divs}
            </div>
          );
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
                <div className = 'user'>
                    <div className = "profilepic">
                        <span className="dot"></span>
                    </div>
                    <div className = "box"> 
                        AI Bot Call <br/> Robot 
                    </div>
                </div>
            </div>
        )
    }

    //Handing User list
      

    return(
        <main>
            <div className = "background"> 
                <Link href ="/find-buddy">
                <div className = "back-btn">
                    &lt; Back
                </div>
                </Link>
                <div className = "selection">
                    <button type="button" onClick = {walkHit} className={page == "walk" ? "selected" : "notselected"}>Walk Partners</button>
                    <button type="button" onClick = {callHit} className={page == "call" ? "selected" : "notselected"}>Call Partners</button>
                </div>
                {page == "walk" ? createUsers() : showCallPartners()}
                
            </div>
        </main>
    )
}

export default Partners