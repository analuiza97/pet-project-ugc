import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //background-color: #F8F8FF;
    background-color: white;
  }

	.ant-table-cell {
  text-align: center;
  font-size: 16px;
  width: 25%;
	}

	.ant-table-thead .ant-table-cell {
		font-size: 18px;
		font-weight: bold;
	}
`;

export default GlobalStyle;
