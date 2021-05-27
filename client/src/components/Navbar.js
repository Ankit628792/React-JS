import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid px-5 py-1">
                    <NavLink className="navbar-brand" to="/">MERN ANKIT</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            <NavLink className="nav-link" to="/signin">SignIn</NavLink>
                            <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
