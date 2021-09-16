import styled from 'styled-components';
import background from '../../assets/images/background.jpg';

const PageBackground = styled.div`
	background-image: url(${background});
	position: relative;
	height: 100vh;
	width: 100vw;
	background-size: cover;
`;

export { PageBackground };
