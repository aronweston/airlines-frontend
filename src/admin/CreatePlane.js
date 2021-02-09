import React, { Component } from 'react'

export class CreatePlane extends Component {

    render() {
        return (
            <div className='bg-red-500 rounder-md text-white my-10 p-4'>
                Create Plane
                <form onSubmit={this._handleSubmit}>
                    <label htmlFor="planeName">Plane Name:
                    <input type="text" name="planeName" placeholder="Plane Name" /></label>

                    <label htmlFor="Rows"> 
                    <input type="text" name="departure" placeholder="Departure City" /></label>
                    
                    <label htmlFor="arrival">To 
                        <input type="text" name="arrival" placeholder="Arrival City" />
                    </label>

                    <button className="bg-indigo-500 text-white rounded-md px-4 py-2 m-2">Create Plane</button>
                </form>
            </div>
        )
    }
}

export default CreatePlane
