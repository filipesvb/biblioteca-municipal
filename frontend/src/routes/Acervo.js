import styled from "styled-components";
import Container from "../components/Container"
import { useEffect, useState } from "react";
import { getLivros } from "../services/livros";

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

    const [livros, setLivros] = useState([]);

    async function fetchLivros() {
        const livrosResultado = await getLivros();
        setLivros(livrosResultado);
    }

    useEffect(() => {
        fetchLivros()
    }, [])

    console.log(livros)

    return (
        <Container>
            <ContainerRow>
                <RowTitle>Destaques</RowTitle>
                <hr />
            </ContainerRow>
            <ContainerRow>
                <RowTitle>Livros novos</RowTitle>
                <hr />
            </ContainerRow>
            <ContainerRow>
                <RowTitle>Por categoria</RowTitle>
                <hr />
            </ContainerRow>
        </Container>
    )
}

export default Acervo;