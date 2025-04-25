import styled from "styled-components"

const Condtainer = styled.header`
    width: 100%;
    background-color: white;
`

const Wrapper = styled.div`
    width: 100%;
`


const Header = () => {
    return (
        <Container>
            <Wrapper>
                <h2>Header</h2>
            </Wrapper>
        </Container>
    )
}

export default Header;