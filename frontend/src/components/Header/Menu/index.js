import styled from "styled-components";
import { Link } from "react-router-dom"

const MenuContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    ul {
        width: 100%;
        max-width: 600px;
        display: flex;
        justify-content: space-between;
    }
    
    ul li a {
        font-size: 1rem;
        color: #000;
        font-weight: 600;
        &:hover {
            color: #f8be22;
        }
    }
`

const Menu = () => {
    return (
        <MenuContainer>
            <ul>
                <li><Link href="#">A biblioteca</Link></li>
                <li><Link to="/acervo">Acervo</Link></li>
                <li><Link href="#">Galeria</Link></li>
                <li><Link href="#">Notícias</Link></li>
                <li><Link href="#">Contato</Link></li>
            </ul>
        </MenuContainer>
    )
}

export default Menu;