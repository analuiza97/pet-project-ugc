import styled from 'styled-components';

const PageBackground = styled.div`
	background-image: url('./images/background.jpg');
	position: relative;
	height: 100vh;
	width: 100vw;
	background-size: cover;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

const Loading = styled.img`
`;

export default PageBackground;
export { PageBackground, ImgContainer, Loading };
