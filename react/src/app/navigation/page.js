"use client";
"use strict";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import ReactDOM from 'react-dom';
import { useRouter } from "next/navigation";


 export default function Navigation(data) {
  const router = useRouter();
  
  const [fromLocation, setfromLocation] = useState([37.87, -122.267]);

    // in call bar at the top
    var callBar = null;
    if (data.searchParams["isInCall"] == "true") {
       callBar = <div className = "call-bar" style=
       {{width: "100%", height: "20px", backgroundColor: "#2AFC7E", textAlign: "center", justifyContent:"center", display:"flex", alignItems: "center"}}>
            <Link href="bot-call"style={{fontSize:"10px", color: "#FFF"}}>In Call</Link>
       </div>; 
    }

    //get location
    useEffect(() => {
    if ('geolocation' in navigator) {
    const watchID = navigator.geolocation.watchPosition((position) => { 
        setfromLocation([position.coords.latitude,  position.coords.longitude]);
    });
    }
  });

//taken from gcp code
const SHORT_NAME_ADDRESS_COMPONENT_TYPES =
  new Set(['street_number', 'administrative_area_level_1', 'postal_code']);

function getFormInputElement(componentType) {
  return document.getElementById(`${componentType}-input`);
}

function fillInAddress(placeFrom, placeTo) {
  function getComponentName(componentType, place) {
    for (const component of place.address_components || []) {
      if (component.types[0] === componentType) {
        return SHORT_NAME_ADDRESS_COMPONENT_TYPES.has(componentType) ?
            component.short_name :
            component.long_name;
      }
    }
    return '';
  }

  function getComponentText(componentType, place) {
    return (componentType === 'location') ?
        `${getComponentName('street_number', place)} ${getComponentName('route', place)}` :
        getComponentName(componentType, place);
  }

    getFormInputElement("location").value = getComponentText("location", placeTo);
    getFormInputElement("from").value = getComponentText("from", placeFrom);
  }

//get address from coordinates, taken from gcp and adapted
async function geocodeLatLng(lat, long) {
  const geocoder = new google.maps.Geocoder();
  
  const latlng = {
    lat: parseFloat(lat),
    lng: parseFloat(long),
  };
  let add;
  await geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        add = response.results[0].formatted_address;
      } else {
        window.alert("No results found");
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
    return add;
}

useEffect(() => {async function initMap() {
const {Map} = google.maps;
const {AdvancedMarkerElement, PinElement} = google.maps.marker;
const {Autocomplete} = google.maps.places;

const mapOptions = {"center":{"lat":fromLocation[0],"lng":fromLocation[1]},"fullscreenControl":false,"mapTypeControl":false,"streetViewControl":false,"zoom":15,"zoomControl":true,"maxZoom":22,"mapId":"1"};
const map = new Map(document.getElementById('gmp-map'), mapOptions);
const autocompleteTo = new Autocomplete(getFormInputElement('location'), {
  fields: ['address_components', 'geometry', 'name'],
});
const autocompleteFrom = new Autocomplete(getFormInputElement('from'), {
  fields: ['address_components', 'geometry', 'name'],
});

var place; 
var placeFrom;
autocompleteTo.addListener('place_changed', async () => {
  place = autocompleteTo.getPlace();
  placeFrom = autocompleteFrom.getPlace();
  var fromPlace;
  if (!placeFrom || !placeFrom.geometry) { //defaults to current location
    fromPlace = await geocodeLatLng(fromLocation[0], fromLocation[1]);
  } else {
    fromPlace = placeFrom;
  }
  if (!place.geometry) {
    // User entered the name of a Place that was not suggested and
    // pressed the Enter key, or the Place Details request failed.
    window.alert(`No details available for input: '${place.name}'`);
    return;
  }
  fillInAddress(fromPlace, place);

getRoutes(placeFrom? fromPlace.geometry.location:{lat: fromLocation[0], lng: fromLocation[1]}, place.geometry.location, map);
});
//get reports and place on map
const reports = await fetch("/api/getReports", {method: "GET"});
for (let report of await reports.json()) {
  const alert = new AdvancedMarkerElement({
    position: report["position"],
    map: map,
    title: report["type"] + ": " + report["details"],
    content: new PinElement({
      background: "#FBBC04",
    }).element,
  });
  alert.setMap(map);
}
}
initMap();
});

const map =  <div className="card-container" style={{width:"100%", height: "100%"}}>
<div id="panel">
<input className="relative justify-center text-center rounded-lg bg-neutral-200" style={{width: "100%"}} placeholder="From: Current Location" id="from-input">
        </input>
  <input type="text" className="relative justify-center mt-5 mb-5 text-center rounded-lg bg-neutral-200" style={{width: "100%"}} placeholder="To: Home" id="location-input"/>
  <div className="half-input-container">
  </div>
</div>
<div className="map" id="gmp-map" style={{position: "relative", overflow: "hidden", width: "100%", height: "100%"}}></div>
</div>

//gets route options
async function getRoutes(from, to, map) {
  const available =  [<div className="flex gap-5 justify-between px-4 pt-5 pb-1.5 w-full shadow-sm bg-sky-950">
    <div className="text-white">
      Safest Route
      <br />
      Safety Score: 4.5
      <br />
      0.75 Mi
      <ul>
        <li>
          <span className="text-sm">Well Lit</span>
        </li>
        <li>
          <span className="text-sm">High Traffic</span>
        </li>
        <li>
          <span className="text-sm">Low Crime Rate</span>
        </li>
      </ul>
    </div>
    <button className="flex flex-col justify-center my-auto text-center text-black">
      <div className="justify-center px-5 py-3 bg-green-400 rounded-md">
        Go
        <br />
        16 Mins
      </div>
    </button>
  </div>];

    const DirectionsService = new google.maps.DirectionsService();
    const DirectionsRenderer = new google.maps.DirectionsRenderer();
    DirectionsRenderer.setMap(map);

    const request = {
      origin: from,
      destination: to,
      travelMode: 'WALKING',
      provideRouteAlternatives: true,
    }
    DirectionsService.route(request, function(result, status) {
        if (status == 'OK') {
          DirectionsRenderer.setDirections(result);
          for (let i = 0; i < result.routes.length; i++) {
            const route=result.routes[i];
            let leg = route["legs"][0];
            const option = <div className="flex gap-5 justify-between px-4 pt-5 pb-1.5 w-full shadow-sm bg-sky-950">
              <div className="text-white">{leg["distance"]["text"]}
              <ul className="text-sm">{route["warnings"]}</ul>
              </div>
              <div className="flex flex-col justify-center self-start text-center text-black">
                <button className="justify-center px-5 py-3 bg-green-400 rounded-md" onClick={()=>startRoute(leg["steps"])}>
                  Go<br/>
                  {leg["duration"]["text"]}
                </button>
            </div>
            </div>;
            available.push(option)
        }
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(available);
      }});    
};

//gets walking directions step by stepp
function startRoute(route) {
    const list = document.getElementById("root");
    list.replaceChildren();
    const input = document.getElementById("panel");
    const text = document.createElement("div");
    text.innerHTML = '<div>' + route[0]["instructions"] + '</div>';
    text.className = "relative justify-center self-stretch px-5 py-3.5 mt-6 text-center text-black rounded-xl bg-zinc-300";
    input.replaceChildren(text);
    const emergency = <div className="relative justify-center items-center px-16 py-8 mt-8 w-full text-2xl text-center whitespace-nowrap bg-red-600 rounded-3xl max-w-[271px]">
        <Link href="emergency">Emergency</Link></div>
   const report = <div className="relative justify-center items-center px-16 py-7 mt-20 max-w-full text-3xl text-center whitespace-nowrap bg-amber-500 rounded-xl w-[244px]">
      <Link href={{pathname:"/report", query: {"isInCall": data.searchParams["isInCall"]}}}>
      Report
      </Link>
  </div>;
  const root = ReactDOM.createRoot(list);
  root.render([report, emergency]);
};

  return (
    <div className="flex flex-col items-center mx-auto w-full text-xl bg-white border-solid border-[3px] border-slate-500 max-w-[480px] mx-auto h-screen w-screen">
      <div className="flex overflow-hidden relative flex-col items-start pt-6 pr-9 pb-20 pl-3 w-full text-2xl aspect-[0.63] text-zinc-500">
        {callBar}
        <button className="overflow-hidden relative flex-col justify-center items-start px-4 text-xl text-white whitespace-nowrap aspect-[4] w-[60px]" 
          onClick={()=> router.back()}>
        <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
              className="object-cover absolute inset-0 size-full"
            />
          Back
        </button>
       {map}
      </div>
      <div id="root"></div>
    </div>
  );
}
