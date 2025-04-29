import styled from "styled-components"

const LivroContainer = styled.div`
    width: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        max-height: 214px;
        object-fit: contain;
        object-position: middle;
    }

    h2 {
        font-size: .6rem;
        padding: 0 .6rem;
    }
`


const Livro = ({titulo, imagemCapa}) => {
    return (
        <LivroContainer>
            <img src={imagemCapa} />
            <h2>{titulo}</h2>
        </LivroContainer>
    )
}

export default Livro;


