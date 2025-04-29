import styled from "styled-components"

const LivroContainer = styled.div`
    width: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        max-height: 260px;
        object-fit: contain;
        object-position: middle;
    }

    h2 {
        font-size: 1rem;
        
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


