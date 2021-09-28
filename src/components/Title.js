import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	right: 0px;
	top: 40px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	
	&:after {
    position: absolute;
    right: 0;
    top: 0;
    content: '';
    width: 12px;
    height: 100%;
    background-color: #ff0036;
	}
`;

const TitlePage = styled.h1`
	font-size: 14px;
	font-weight: normal;
	margin-right: 30px;
`;

const Title = ({text}) => (
	<Wrapper>
		<TitlePage>{text}</TitlePage>
	</Wrapper>
)

Title.defaultProps = {
	text: 'PET Project Estágio Tech 2021'
}

export default Title;
