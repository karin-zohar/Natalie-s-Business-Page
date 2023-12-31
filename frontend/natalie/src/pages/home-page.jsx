import { Hero } from '../cmps/hero'
import { ContentParagraph } from '../cmps/content-paragraph'
import {contentParagraphs} from '../constants/hompage-constants'

export function HomePage() {
    console.log('contentParagraphs: ', contentParagraphs)
    return (
        <section className="home-page main-layout full">
            <Hero />
            <div className="spacer"></div>
            <h1>this is a home page</h1>

            <section className="content-wrapper">
                <ul>
                    {contentParagraphs.map((paragraph, idx) => 
                    <li key={idx}>
                        <ContentParagraph paragraph={paragraph}/>
                    </li>
                    )}
                </ul>
            </section>
        </section>
    )
}