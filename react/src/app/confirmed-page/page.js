"use client"

import * as React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

function Confirmed (){
    
    const router = useRouter();

    const goHome = () => {
        router.push("/");
    }

    return(
    <main>
        <div className = "background">
            <div className = "text">
                Message Sent!
            </div>
            <button type="button" onClick = {goHome} className="btn btn-warning btn-lg">Go Home</button>
        </div>
    </main>
    );
}

export default Confirmed