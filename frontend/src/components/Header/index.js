import styled from "styled-components"
import logotype from "../../assets/logotype.svg"
import Menu from "./Menu"
import { Link } from "react-router-dom"

const HeadContainer = styled.header`
    width: 100%;
    background-color: white;
    padding: .4rem 0;
`
    
const Wrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    margin:0 auto;
`

const Logotype = styled.img`
    object-fit: contain;
    object-position: -12px center;
`


const Header = () => {
    return (
        <HeadContainer>
            <Wrapper>
                <Link to="/">
                    <Logotype src={logotype} />
                </Link>
            </Wrapper>
            <Wrapper>
                <Menu />
            </Wrapper>
        </HeadContainer>
    )
}

export default Header;