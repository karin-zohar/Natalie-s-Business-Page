import { Hero } from '../cmps/hero'
import { ContentParagraph } from '../cmps/content-paragraph'
import {contentParagraphs} from '../constants/hompage-constants'

export function HomePage() {
    return (
        <section className="home-page main-layout full">
            <Hero />
            <div className="spacer"></div>

            <section className="content-wrapper" id="content-wrapper">
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