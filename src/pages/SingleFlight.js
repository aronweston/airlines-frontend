import React, {useState, useEffect} from 'react'
import Booking from '../components/Booking'
import { useParams, Link } from 'react-router-dom';
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
            <div className="my-10">
                <h1 className="text-5xl">{flightData.departure} to {flightData.arrival}</h1>
                <h2>{flightData.flight_number} - { new Date(flightData.date).toLocaleDateString()}</h2>
                <p>Total seats: {flightData.max_seats}</p>
                <p>Plane: {flightData.plane}</p>
            </div>
            <div className="my-10">
                <Booking booking={bookingData} /> 
            </div>
            <div className="my-10">
                <Link className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2  transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outliner" to="/search">Search Flights</Link>
                <Link className="border border-gray-200 bg-gray-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-600 focus:outline-none focus:shadow-outliner" to="/flights">Back to flights</Link>
            </div>
           
        </div>
    )
}
