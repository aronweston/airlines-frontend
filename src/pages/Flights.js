import React, { Component } from 'react'

export class Flights extends Component {
    render() {
        return (
            <div>
                <h1>Flights Page</h1>
                <FlightSearch />
                <FlightResults />
            </div>
        )
    }
}

export default Flights
