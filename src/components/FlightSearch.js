import React, { Component } from 'react'

export class FlightSearch extends Component {

    constructor() {
        super() 
        this.state = {
            search: [
                {id: '1', }
            ]
        }
    }

    _handleSubmit(e) {
        e.preventDefault();
    }

    _handleInput(e) {
      
    }

    render() {
        return (
            <div className="bg-red-500 rounder-md text-white my-10 p-4">
                <h2>Search Flights</h2>
                <form onSubmit={this._handleSubmit}>
                    <label htmlFor="departure">From 
                    <input type="text" name="departure" placeholder="Departure City" /></label>
                    
                    <label htmlFor="arrival">To 
                        <input type="text" name="arrival" placeholder="Arrival City" />
                    </label>
                    <button className="bg-indigo-500 text-white rounded-md px-4 py-2 m-2">Search Flight</button>
                </form>
            </div>
        )
    }
}

export default FlightSearch


