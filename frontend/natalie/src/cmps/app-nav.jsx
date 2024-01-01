import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'



export function AppNav() {
    const offset = -80 // header height * -1 
    return (
        <nav className="app-nav">
            <ul>
                <li>
                    <Link to="content-wrapper" spy={true} offset={offset} duration={500} smooth={true}>תוכן</Link>
                </li>
            </ul>
            
        </nav>
    )
}