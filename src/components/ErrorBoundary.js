import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ErrorGif = styled.img`
  max-width: 350px;
`;

const Warning = styled.img`
  max-width: 35px;
`;

const ErrorMsg = styled.div`
  overflow: hidden;
  font-family: Quicksand, arial, sans-serif;
  font-size: 20px;
  padding: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 35px;
`;

const RenderError = () => {
  return (
    <Container>
      <ErrorGif src="./images/error.gif" alt="error gif" />
      <ErrorMsg>
        <Warning src="./images/warning.png" alt="warning icon" />
        Something went wrong! Please restart the page or try again later.
      </ErrorMsg>
    </Container>
  );
};

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = error => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) {
      return children;
    }

    return <RenderError />;
  }
}
