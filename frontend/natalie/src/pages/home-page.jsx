import { Hero } from "../cmps/hero"

export function HomePage(){
    return (
        <section className="home-page main-layout full">
            <Hero />
            <div className="spacer"></div>
            <h1>this is a home page</h1>
        </section>
    )
}