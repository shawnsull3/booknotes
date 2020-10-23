export default function Books({ bookData }) {
    return (
      <Layout>
        <Head>
            <title>{bookData.title}</title>
        </Head>
        <article>
            <h1>{bookData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: bookData.contentHtml }} />
        </article>
      </Layout>
    )
}