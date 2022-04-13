import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <Link className='p-3' to='/LandingPage'>LandingPage</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='p-3' to='/CustomCoverage'>CustomCoverage</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='p-3' to='/AddQuote'>AddQuote</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
