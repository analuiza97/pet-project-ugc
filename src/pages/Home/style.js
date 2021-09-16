import styled from 'styled-components';

const PageBackground = styled.div`
	background-image: url('./images/background.jpg');
	position: relative;
	height: 100vh;
	width: 100vw;
	background-size: cover;

	& .ant-table-cell {
  text-align: center;
  font-size: 16px;
  width: 25%;
	}

	& .ant-table-thead,
	& .ant-table-cell {
		font-size: 18px;
		font-weight: bold;
	}
`;

export { PageBackground };
export default PageBackground;
