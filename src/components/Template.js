import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import Head from 'next/head';

const Container = styled.div`
  background-image: url('./images/background.jpg');
  background-size: cover;
  position: relative;
  //height: 100vh;
  width: 100%;
  & main {
    display: flex;
    justify-content: center;
    align-items: center;
    //height: calc(100% - 250px);
  }
`;

function Template({ children, title }) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <Footer />
    </Container>
  );
}

Template.defaultProps = {
  title: 'Tratamento de Error Boundaries',
  children: <></>,
};

export default Template;
