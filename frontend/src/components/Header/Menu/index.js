import styled from "styled-components";

const MenuContainer = styled.nav`
    width: 100%;
    
    ul {
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`

const Menu = () => {
    return (
        <MenuContainer>
            <ul>
                <li><a href="#">A biblioteca</a></li>
                <li><a href="#">Acervo</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </MenuContainer>
    )
}

export default Menu;