import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaCard from "./NasaCard";

export default function() {
    const [nasaDay, setNasaDay] = useState({});

    useEffect( () => {
        axios 
        .get(`https://api.nasa.gov/planetary/apod?api_key=XOZ7tWivKsZxXXV2W9jy8UmOnPLqIECeWr1zn8xE`)
        .then(res => {
            const today = res.data;
            console.log("demo data", res);
            setNasaDay(today);
        })
        .catch(error => {console.log("Error finding URL", error)}) 
    },{})

    return (
        <div>
            <NasaCard title={nasaDay.title} explanation={nasaDay.explanation} imgUrl={nasaDay.hdurl}  copyright={nasaDay.copyright} date={nasaDay.date} />
        </div>
    )
}
