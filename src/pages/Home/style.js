import styled from 'styled-components';

const PageBackground = styled.div`
	background-image: url('./images/background.jpg');
	position: relative;
	height: 100vh;
	width: 100%;
	background-size: cover;
	background: blue;
`;

const Loading = styled.img`
`;

export default PageBackground;
export { PageBackground, Loading };
