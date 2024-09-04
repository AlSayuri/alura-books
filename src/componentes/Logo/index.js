import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoConteiner = styled.div`
    display: flex;
    font-size: 30px;
    margin-right: 10px;
`;

const LogoImage = styled.img`
    margin-right: 10px;
`;

function Logo(){
    return (
        <LogoConteiner>
          <LogoImage 
                src={logo} 
                alt='logo' 
                className='logo-img'
            />
          <p><strong>Alura</strong>Books</p>
        </LogoConteiner>
    );
}

export default Logo;