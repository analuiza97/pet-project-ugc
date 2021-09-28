import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 48px auto 0;
`;

const ErrorGif = styled.img`
  max-width: 350px;
  ${media.lessThan('medium')`
  max-width: 170px;`}
`;

const Warning = styled.img`
  max-width: 35px;
  ${media.lessThan('medium')`
  max-width: 25px;`}
`;

const ErrorText = styled.span`
  margin-left: 7px;
  font-size: 20px;
  ${media.lessThan('medium')`
  font-size: 12px;
  line-height: 1.4;`}
`;

const ErrorMsg = styled.div`
  overflow: hidden;
  padding: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.lessThan('medium')`
  padding: 10px 7px;
  width: 70vw;
`}
`;

const RenderError = () => {
  return (
    <Container>
      <ErrorGif src="./images/error.gif" alt="error gif" />
      <ErrorMsg>
        <Warning src="./images/warning.png" alt="warning icon" />
        <ErrorText>Something went wrong! Please restart the page or try again later.</ErrorText>
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
