import React, { Component } from 'react'
import Seat from '../components/Seat'

export class Plane extends Component {
    render() {
        return (
            <div>
                <h1>Plane Layout</h1>
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
            </div>
        )
    }
}

export default Plane
