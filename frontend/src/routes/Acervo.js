import styled from "styled-components";
import Container from "../components/Container"

const ContainerRow = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;

    hr {
        height: 2px;
        border: none;
        background: #555555;
    }
`

const RowTitle = styled.h2`
    font-size: 1rem;
    font-weight: normal;
    color: #555555;
  
`

const Acervo = () => {
    return (
        <Container>
            <ContainerRow>
                <RowTitle>Destaques</RowTitle>
                <hr />
            </ContainerRow>
        </Container>
    )
}

export default Acervo;