import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'



export function AppNav({setOpen}) {
    const offset = -80 // header height * -1 

    function closeDrawer() {
        if (window.innerWidth > 600) return
        setOpen(false)
    }

    return (
        <nav className="app-nav">
            <ul>
                <li>
                    <Link to="content-wrapper" spy={true} offset={offset} duration={500} smooth={true} onClick={closeDrawer}>תוכן</Link>
                </li>
            </ul>
            
        </nav>
    )
}