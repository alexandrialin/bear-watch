'use client'
import * as React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LoadScript, Autocomplete } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Buddy() {

  const router = useRouter();

  const [startPlace, setStartPlace] = React.useState(null);
  const [startautocomplete, setStartAutocomplete] = React.useState(null);
  const [endautocomplete, setEndAutocomplete] = React.useState(null);
  const [endPlace, setEndPlace] = React.useState(null);

  const handleStartAutocomplete = (autocomplete) => {
    setStartAutocomplete(autocomplete); // Set autocomplete when it's loaded
  };

  const handleEndAutocomplete = (autocomplete) => {
    setEndAutocomplete(autocomplete); // Set autocomplete when it's loaded
  };

  const setStartLocation = (place) => {
    setStartPlace(place);
  }

  const setEndLocation = (place) => {
    setEndPlace(place);
  }




  const submit = () => {
    localStorage.setItem('startLat', startPlace.geometry.location.lat());
    localStorage.setItem('startLon', startPlace.geometry.location.lng());
    localStorage.setItem('endLat', endPlace.geometry.location.lat());
    localStorage.setItem('endLon', endPlace.geometry.location.lng());
    router.push('partners');
  }

  return (
    <main>
      <div className="background">
      <Link href ="/">
          <div className = "back-btn">
            &lt; Back
          </div>
        </Link>
        <div className = "location-input">
        <LoadScript
            googleMapsApiKey ={process.env.NEXT_PUBLIC_API_GOOGLE_MAPS}
            libraries={['places']}
          >
          <Autocomplete onLoad={(startAutocomplete) => handleStartAutocomplete(startAutocomplete)} onPlaceChanged={() => setStartLocation(startautocomplete.getPlace())}>
            <input type="text" placeholder="Start Location" className = "form-control start"/>
          </Autocomplete>
          <Autocomplete onLoad={(autocomplete) => handleEndAutocomplete(autocomplete)} onPlaceChanged={() => setEndLocation(endautocomplete.getPlace())}>
            <input type="text" placeholder="End Location" className = "form-control end"/>
          </Autocomplete>
          </LoadScript>
        </div>
      <div className = 'submit'>
        <button type="button" onClick = {submit} className="btn btn-warning btn-lg">Submit</button>
      </div>
      </div>
    </main>
  );
}



export default Buddy