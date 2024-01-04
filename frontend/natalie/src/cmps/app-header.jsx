import { Link } from 'react-router-dom'
import { AppNav } from './app-nav'
import { MenuDrawer } from './menu-drawer'
import {useState, useEffect} from 'react'

export function AppHeader() {
    
    const [isTop, setIsTop] = useState(window.pageYOffset === 0)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

    useEffect(() => {
        const handleScroll = () => {
            onScroll()
        }

        const handleResize = () => {
            onResize()
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    },[])

    function getHeaderStyle() {
        const isTransparent = (isTop) ? '' : 'opaque-background'
        return isTransparent
    }

    function onScroll() {
        setIsTop(window.pageYOffset === 0)
    }

    function onResize() {
        setIsMobile(window.innerWidth < 600)
    }

    return (
        <header className={`app-header main-layout full ${getHeaderStyle()}`}>
            { isMobile ? (
                <MenuDrawer />
            ) :
           ( <AppNav />)
            }
        </header>
    )
}