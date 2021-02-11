import React, { Component } from 'react'
import axios from 'axios'
import _ from 'underscore'


const SERVER_URL = 'http://localhost:3000/flights.json'

export class Flights extends Component {
    getFlights(depart, arrival) {
    axios.get(SERVER_URL)
      .then(res => {
        const results = _(res.data).where({departure: depart, arrival: arrival})
        this.setState({ results: results })
        console.log(this.state.results);
      })
      .catch(err => console.error(err))
  }

    render() {
        return (
            <div>
                <h1 className="text-5xl">Flights</h1>
    
                <table className="table-auto">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Flight No.</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Plane</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3/1/13</td>
                        <td>23</td>
                        <td>Melbourne</td>
                        <td>Adelaide</td>
                        <td>747</td>
                    </tr>
                </tbody>
                </table>
                </div>
        )
    }
}

export default Flights;
