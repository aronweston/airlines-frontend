import React, { Component } from 'react'
import CreatePlane from '../admin/CreatePlane'

export class Planes extends Component {
    render() {
        return (
            <div>
                <h1 className="text-5xl">Planes</h1>
                <CreatePlane/>
            </div>
        )
    }
}

export default Planes
