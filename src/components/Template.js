import GlobalStyle from '../assets/styles';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

function Template({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </>
  );
}

export default Template;
