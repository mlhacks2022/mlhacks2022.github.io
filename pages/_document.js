import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Monoton&family=Open+Sans&family=Plus+Jakarta+Sans&family=Roboto+Mono&family=Koulen&family=Press+Start+2P&family=Share&family=Wallpoet&family=Bungee+Shade&family=Zen+Dots&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument