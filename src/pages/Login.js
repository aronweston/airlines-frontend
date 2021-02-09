import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <h1 className="text-5xl text-center">Login</h1>
              
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 mx-auto">
                    <form className="mt-2">
                        <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email Address</label>

                        <input type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        
                            <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                            
                            <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                                Login
                        </button>
                        
                    </form> 
                </div>
                </div>
        )
    }
}

export default Login
