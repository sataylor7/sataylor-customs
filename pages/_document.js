import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name='title'
            content='Headless Commerce example with Vercel'
            key='title'
          />
          <meta
            name='description'
            content='An open source headless commerce example powered by Commerce.js and Vercel. Start your headless commerce application now!'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          {/* <link
            rel='shortcut icon'
            href='//images.atticus.com/images/www/media/favicon.png'
            type='image/png'></link> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Gulzar:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap'
            rel='stylesheet'
          />
          {/* {GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )} */}
        </Head>
        <body className='antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;