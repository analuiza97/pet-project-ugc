import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import Head from 'next/head';

function Template({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </>
  );
}

Template.defaultProps = {
  title: 'Tratamento de Error Boundaries',
  children: <></>,
}

export default Template;
