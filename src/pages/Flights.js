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
                <h1 className="text-5xl my-2">Flights</h1>
                <table className="table-fixed bg-gray-200 text-gray-800">
                    <thead>
                        <tr className="text-left p-10 border-b-2 border-gray-300">
                            <th className="w-1/5">Departure</th>
                            <th className="w-1/5">Arrival</th>
                            <th className="w-1/5"> Date</th>
                            <th className="w-1/5">Plane</th>
                            <th className="w-1/5">Flight No.</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.flights && this.state.flights.map((flight) => 
                        <tr key={flight.id} className="text-left border-b-2 border-gray-300 rounded-b">
                            <td className="px-4 py-3">{flight.departure.toUpperCase()}</td> 
                            <td className="px-4 py-3">{flight.arrival.toUpperCase()}</td>
                            <td className="px-4 py-3">{new Date(flight.date).toLocaleDateString()}</td>
                            <td className="px-4 py-3">{flight.plane.toUpperCase()}</td>
                            <td className="px-4 py-3"><Link className="hover:underline" to={`flights/${flight.id}`}>{flight.flight_number}</Link></td>
                        </tr>
                    )}        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Flights;
