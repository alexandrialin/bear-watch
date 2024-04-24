'use client'
import * as React from "react";
import './style.css';
import Link from 'next/link';;
import 'bootstrap/dist/css/bootstrap.min.css';

function Buddy() {
  const [start, setStart] = React.useState('');
  const [end, setEnd] = React.useState('');

  const [startLat, setStartLat] = React.useState('');
  const [startLon, setStartLon] = React.useState('');
  const [endLat, setEndLat] = React.useState('');
  const [endLon, setEndLon] = React.useState('');
  
  const updateStart = (event) => {
    setStart(event.target.value);
  }

  const updateEnd = (event) => {
    setEnd(event.target.value);
  }


  const submit = () => {
    const formatStart = start.split(' ').join('+');
    const formatEnd = end.split(' ').join('+');
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${formatStart}&filter=circle:-122.25948668293665,37.87023239260658,1000&bias=proximity:-122.25949134537427,37.8702670425171|countrycode:none&format=json&apiKey=2323759d923b481ea616dd78ba5baea9`)
    .then(response => response.json())
    .then(result => {
      const startLat = result.results[0].lat;
      const startLon = result.results[0].lon;
      fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${formatEnd}&filter=circle:-122.25948668293665,37.87023239260658,1000&bias=proximity:-122.25949134537427,37.8702670425171|countrycode:none&format=json&apiKey=2323759d923b481ea616dd78ba5baea9`)
      .then(response => response.json())
      .then(result => {
        const endLat = result.results[0].lat; 
        const endLon = result.results[0].lon;
        window.location.href = `/partners?startLat=${startLat}&startLon=${startLon}&endLat=${endLat}&endLon=${endLon}`;
      });
    });
  };

  return (
    <main>
      <div className="background">
        <div className = "back-btn">
          &lt; Back
        </div>
        <div className = "location-input">
          <input placeholder = "Start Location" onChange={updateStart} className = "form-control start"/> 
          <input placeholder = 'End Location' onChange={updateEnd} className = "form-control end"/> 
        </div>
      <div className = 'submit'>
        {/* <Link href={url}> */}
          <button type="button" onClick = {submit} className="btn btn-warning btn-lg">Submit</button>
        {/* </Link> */}
      </div>
      </div>
    </main>
  );
}



export default Buddy