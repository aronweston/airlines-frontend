import React, {useState, useEffect} from 'react'
import Booking from '../components/Booking'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import _ from "underscore"

export default function SingleFlight() {
    const { id } = useParams();
    const [bookingData, setBookingData] = useState([])
    const bookingServer = `http://localhost:3000/bookings.json`
    
    const [flightData, setFlightData] = useState([])
    const flightsServer = `http://localhost:3000/flights/${id}.json`


    function getFlights() {
        axios.get(flightsServer)
            .then((res) => {
                setFlightData(res.data)
            })
            .catch((err) => console.error(err));
    }
   
    function getBookings() {
        axios.get(bookingServer)
            .then((res) => {
                console.log(res.data);
                const bookings = _(res.data).where({ flight_id: Number(id) });
                setBookingData(bookings)
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        getFlights();
        getBookings()
    }, [])

    return (
        <div>
            <h1 className="text-5xl">{flightData.departure} to {flightData.arrival}</h1>
            <h2>{flightData.flight_number} - { new Date(flightData.date).toLocaleDateString()}</h2>
            <p>Total seats: {flightData.max_seats}</p>
            <p>Plane: {flightData.plane}</p>
            <Booking booking={bookingData} />
        </div>
    )
}
