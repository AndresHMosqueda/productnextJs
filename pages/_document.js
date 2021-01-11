import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link
            type="text/css"
            rel="stylesheet"
            href="/magiczoomplus/magiczoomplus.css"
          />
          <script
            type="text/javascript"
            src="/magiczoomplus/magiczoomplus.js"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
