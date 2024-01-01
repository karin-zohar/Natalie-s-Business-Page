import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'



export function AppNav() {
    return (
        <nav className="app-nav">
            <ul>
                <li>
                    <Link to="content-wrapper" spy={true} offset={0} duration={500} smooth={true}>תוכן</Link>
                </li>
                <li>
                    <Link to="test" spy={true} offset={0} duration={500} smooth={true}>טסט</Link>
                </li>
            </ul>
            
        </nav>
    )
}