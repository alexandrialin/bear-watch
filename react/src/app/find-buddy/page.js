import * as React from "react";
import './style.css';
import Link from 'next/link';

function Buddy() {
  return (
    <main>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      </head>
      <div class="background">
        <div class = "back-btn">
          &lt; Back
        </div>
        <div class = "location-input">
          <input placeholder = "Start Location" class = "form-control start"/> 
          <input placeholder = "End Location" class = "form-control end"/> 
        </div>
      <div class = 'submit'>
        <Link href="partners">
        <button type="button" class="btn btn-warning btn-lg">Primary</button>
        </Link>
      </div>
      </div>
    </main>
  );
}



export default Buddy