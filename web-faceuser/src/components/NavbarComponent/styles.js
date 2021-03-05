import styled from 'styled-components';
import WhiteLogo from '../../assets/images/white-icon.png';
import {Navbar} from 'react-bootstrap';
export const Container = styled(Navbar)`
    background: #4266af;
    height: 35px;
`;

export const Logo = styled.img.attrs(
    props => ({
        src: WhiteLogo
    })
)`
    width: 20px;
    height: 20px;
`;