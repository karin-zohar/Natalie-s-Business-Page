export function ContentParagraph({paragraph}) {
    const { title, body, imgUrl, imgAltText } = paragraph
    console.log('paragraph: ', paragraph) // returns the object correctly
    console.log('paragraph.title: ', paragraph.title) // returns undefined
    return (
        <section className="content-paragraph">
            <article className="img-container">
                <img src={imgUrl} alt={imgAltText} />
            </article>
            <article className="text-container">
                <h2 className="paragraph-title">{title}</h2>
                <p className="paragraph-body">{body}</p>
            </article>
        </section>
    )
}