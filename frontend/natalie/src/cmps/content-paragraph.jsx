export function ContentParagraph({paragraph}) {
    const { title, body, imgUrl, imgAltText } = paragraph
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