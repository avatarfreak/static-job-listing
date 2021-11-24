import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
   }
   render() {
      const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
      return (
         <Html lang="en">
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
               <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap" rel="stylesheet" />
               <link rel="icon" type="image/png" sizes="32x32" href={`${prefix}/assets/favicon-32x32.png`} />
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
