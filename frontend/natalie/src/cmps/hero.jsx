import { Link } from "react-router-dom"

export function Hero() {
    const heroImgUrl = 'https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <section className="hero main-layout full">
            <img src={heroImgUrl} alt="" className="hero-img full" />
            <section className="hero-content">
                
            </section>
        </section>
    )
}