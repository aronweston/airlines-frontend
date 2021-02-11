import React, { Component } from "react";


export class FlightSearch extends Component {
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
      <div className="bg-red-500 rounder-md text-black my-10 p-4">
        <form onSubmit={this._handleSubmit}>
          <label className="inline-block" htmlFor="departure">
            From:
            <select
              value={this.state.departure}
              onChange={this._handleDeparture}
              name="departure"
              id="departure"
            >
              <option value="">--Please choose an option--</option>
              <option value="brisbane">Brisbane</option>
              <option value="sydney">Sydney</option>
              <option value="perth">Perth</option>
              <option value="darwin">Darwin</option>
              <option value="melbourne">Melbourne</option>
              <option value="hobart">Hobart</option>
            </select>
          </label>
          <br></br>
          <label htmlFor="arrival">
            To:
            <select
              value={this.state.arrival}
              onChange={this._handleArrival}
              name="arrival"
              id="arrival"
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="brisbane">Brisbane</option>
              <option value="sydney">Sydney</option>
              <option value="perth">Perth</option>
              <option value="darwin">Darwin</option>
              <option value="melbourne">Melbourne</option>
              <option value="hobart">Hobart</option>
            </select>
          </label>
          <br/>
          <button
            type="submit"
            className="bg-indigo-500 text-white rounded-md px-4 py-2 m-2"
          >
            Search Flight
          </button>
        </form>
      </div>
    );
  }
}

export default FlightSearch;
