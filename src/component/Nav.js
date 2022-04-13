import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <Link className='p-3' to='/home'>LandingPage</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='p-3' to='/about'>CustomCoverage</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='p-3' to='/service'>AddQuote</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
