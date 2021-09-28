import styled from 'styled-components';

const LoadingCircle = styled.div`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  align-items: center;
  &:after {
    border-width: 4px;
    border: 2px solid #ff0036;
    animation: rotate 500ms infinite linear;
    border-radius: 100%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: 48px;
    width: 48px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
	align-items: center;
`;

const Spinner = () => (
  <LoadingContainer>
    <LoadingCircle />
  </LoadingContainer>
);

export default Spinner;
