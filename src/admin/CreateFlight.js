import React, { Component } from 'react'

export class CreateFlight extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            departure: "",
            arrival: ""
        };

        this._handleDeparture = this._handleDeparture.bind(this);
        this._handleArrival = this._handleArrival.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);

  }
  
  _handleDeparture(e) {
    this.setState({ departure: e.target.value });
  }

  _handleArrival(e) {
    this.setState({ arrival: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.departure, this.state.arrival)
  }

    render() {
        return (
            <div className='bg-red-500 rounder-md text-white my-10 p-4'>
                Create Flight
                <form onSubmit={this._handleSubmit}>
                    <label htmlFor="flight-number">Flight Number
                    <input type="number" name="flightnumber" placeholder="Flight Number" /></label>

                    <label htmlFor="departure">From
                    <input type="text" name="departure" placeholder="Departure City" /></label>
                    
                    <label htmlFor="arrival">To
                        <input type="text" name="arrival" placeholder="Arrival City" />
                    </label>

                    <label htmlFor="">Date
                        <input type="date" name="date" />
                    </label>

                    <label htmlFor="plane">Plane:
                        <select>
                            <option value="" selected>-</option>
                            <option value="747">Boeing 747</option>
                            <option value="A380">Airbus A380</option>
                            <option selected value="A320">Airbus A320</option>
                        </select>
                    </label>

                    <button className="bg-indigo-500 text-white rounded-md px-4 py-2 m-2">Create Flight</button>
                </form>
            </div>
        )
    }
}

export default CreateFlight
