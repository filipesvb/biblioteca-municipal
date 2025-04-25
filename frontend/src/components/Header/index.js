import styled from "styled-components"

const HeadContainer = styled.header`
    width: 100%;
    background-color: white;
    padding: 1rem 10%;
`

const Wrapper = styled.div`
    width: 100%;
`


const Header = () => {
    return (
        <HeadContainer>
            <Wrapper>
                <h2>Header</h2>
            </Wrapper>
        </HeadContainer>
    )
}

export default Header;