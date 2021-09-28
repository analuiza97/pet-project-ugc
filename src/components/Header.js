import Image from 'next/image';
import styled from 'styled-components';

const PageHeader = styled.header`
  background: #fff;
  height: 100vh;
  width: 90px;
  padding: 40px 30px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-right: 1px solid #cccccc;
  box-sizing: border-box;
  z-index: 10;
  transition: all .5s ease;
  
  > button {
    display: none;
  }
  
  @media (max-width: 767.98px) {
    width: 1px;
    padding: 0;

    &.open {
      width: 90px;
      padding: 40px 30px;
    }
    
    > img {
      display: none;
    }
    
    > button {
      display: block;
      position: absolute;
      right: -50px;
      top: 50px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      
      & img {
        transition: all 250ms ease;

        &.btn-plus {
          transform: rotate(45deg);
        }
      } 
    }
  }
`;

const Header = ({collapse, toggleCollapse}) => {

  return (
    <PageHeader className={collapse ? 'open' : ''}>
      <Image src='/images/americanas-short.svg' alt='logotipo Americanas' width="22" height="22"/>
      <Image src='/images/github.svg' alt='logotipo Github' width="22" height="22"/>
      <button type='button' onClick={toggleCollapse} >
        <Image className={collapse ? '' : 'btn-plus'} src='/images/close.svg' alt='logotipo Github' width="22" height="22" />
      </button> 
    </PageHeader>
  );
};

Header.defaultProps = {
  collapse: false,
  setCollapse: () => false,
}

export default Header;
