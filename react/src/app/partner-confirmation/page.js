"use client";

import * as React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

function PartnerConfirmation(){

  const router = useRouter();

    const sendMessage = async (partnerType) => {
      const url = `https://api.twilio.com/2010-04-01/Accounts/${process.env.NEXT_PUBLIC_TWILLIO_ACCOUNT}/Messages.json`;
    
      const authHeader =
      "Basic " +
      btoa(
        `${process.env.NEXT_PUBLIC_TWILLIO_ACCOUNT}:${process.env.NEXT_PUBLIC_TWILLIO_AUTH}`
      );
        const headers = {
          Authorization: authHeader,
          "Content-Type": "application/x-www-form-urlencoded",
        };
    
        const body = new URLSearchParams({
          To: "+18777804236",
          From: "+18447803609",
          Body: `Hello, I'm ${name} looking for a ${partnerType} partner. Please contact me at 510-867-5309 so we can coordinate!`,
        });
    
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: body,
          });
    
          if (!response.ok) {
            throw new Error("Failed to send message: " + response.statusText);
          }
    
          const responseData = await response.json();
          console.log("Message sent successfully:", responseData);
        } catch (error) {
          console.error("Error sending message:", error);
        }
      };

    const name = localStorage.getItem('selectedName');
    const gender = localStorage.getItem('selectedIdentity');
    const startDistance = localStorage.getItem('selectedStart');
    const endDistance = localStorage.getItem('selectedEnd');
    const partnerType = localStorage.getItem('partnerType');

    const submit = () => {
        sendMessage(partnerType);
        router.push("/confirmed-page");

    }

    const cancel = () => {
        window.location.href = '/partners';
    }

    return(
        <main>
            <div className = "background"> 
                <div className = "requestInfo">
                    <div className = "topText">
                        Request Walk Partner?
                    </div>
                    <div className = "user">
                        <div className = "top">
                            <span className="dot"></span>
                            <div className = "name"> {name} </div>
                        </div>
                        <div className = "info">
                            {gender} <br/>
                            Start Location: {startDistance} miles away <br/>
                            End Location: {endDistance} miles away
                        </div>
                    </div>
                </div>
                <div className = "buttons">
                    <button type="button" onClick = {submit} className="btn btn-success btn-lg">Submit</button>
                    <button type="button" onClick = {cancel} className="btn btn-danger btn-lg">Cancel</button>
                </div>
            </div>
        </main>
    )
}

export default PartnerConfirmation