import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="bg-red-900">
            <div className="container mx-auto flex justify-between">
                <NavLink to='/'><h1 className="text-white text-2xl py-2 px-2 my-2 ">Burning Airlines</h1></NavLink>
                <nav className="flex">
                    
                    <NavLink activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2 text-white text-2xl" to='/flights'>
                        Flights
                    </NavLink>

                    <NavLink activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2 text-white text-2xl" to='/planes'>
                        Planes
                    </NavLink>
                    
                    <NavLink activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2 text-white text-2xl" to='/search'>
                        Search
                    </NavLink>
                </nav>
            </div>
        </header> 
    );
}

export default NavBar;
