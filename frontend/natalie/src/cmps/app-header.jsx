import { Link} from 'react-router-dom'
import { AppNav } from './app-nav'
import {useState, useEffect} from 'react'

export function AppHeader() {
    
    const [isTop, setIsTop] = useState(window.pageYOffset === 0)

    useEffect(() => {
        const handleScroll = () => {
            onScroll()
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    function getHeaderStyle() {
        const isTransparent = (isTop) ? '' : 'opaque-background'
        return isTransparent
    }

    function onScroll() {
        setIsTop(window.pageYOffset === 0)
    }

    return (
        <header className={`app-header main-layout full ${getHeaderStyle()}`}>
            <AppNav />
        </header>
    )
}