import React, {useState, useEffect} from 'react'
import Plane from '../components/Plane'
import FlightInfo from '../components/FlightInfo'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function SingleFlight() {
    const { id } = useParams();
    const [bookingData, setBookingData] = useState([])
    const bookingServer = `http://localhost:3000/bookings.json`

    const [flightData, setFlightData] = useState([])
    const flightsServer = `http://localhost:3000/flights/${id}.json`


    // const getFlights = () => {
    //     axios.get(bookingServer).then((res) => {
    //         setFlightData(res.data)
            
    //     }).catch((err) => console.error(err));

    // }

    // useEffect(() => {
    //     //get all flights
    //     get(flightsServer, setFlightData, flightData, (data) => {
    //         console.log(data);
    //     })

    //     get(bookingServer, setBookingData, bookingData, (data) => {
    //         console.log(data);
    //     })
   
    // }, [])


    return (
        <div>
            <h1>Single Flight {id}</h1>
            <FlightInfo flight={flightData} />
            <Plane flight={flightData} />
        </div>
    )
}
