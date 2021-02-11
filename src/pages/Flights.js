import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

const SERVER_URL = 'http://localhost:3000/flights.json'

export class Flights extends Component {

    constructor() {
        super()
        this.state = {
            flights: []
        }
    }
    
    componentDidMount() {
        const getFlights = () => {
            axios.get(SERVER_URL)
            .then(res => {
                console.log(res.data);
                this.setState({ flights: res.data })
                console.log(this.state.flights);
            })
            .catch(err => console.error(err))
        }
        getFlights();
    }

    render() {
        return (
            <div>
                <h1 className="text-5xl ">Flights</h1>
                <table className="p-10 m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <thead>
                    <tr className="text-left p-10 border-b-2 border-gray-300">
                        <th>Date</th>
                        <th>Flight No.</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Plane</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.flights && this.state.flights.map((flight) => 
                    <tr key={flight.id} className="text-left border-b-2 border-gray-300 rounded-b">
                        <td className="px-4 py-3">{new Date(flight.date).toLocaleDateString()}</td>
                        <td className="px-4 py-3"><Link className="hover:underline" to={`flights/${flight.id}`}>{flight.flight_number}</Link></td>
                        <td className="px-4 py-3">{flight.departure.toUpperCase()}</td> 
                        <td className="px-4 py-3">{flight.arrival.toUpperCase()}</td>
                        <td className="px-4 py-3">{flight.plane.toUpperCase()}</td>
                    </tr>
                 )}        
                </tbody>
                </table>
            </div>
        )
    }
}

export default Flights;
