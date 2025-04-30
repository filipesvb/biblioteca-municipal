import styled from "styled-components"

const LivroContainer = styled.div`
    width: 120px;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;

    h2 {
        width: 100%;
        font-size: .6rem;
        padding: 0 1rem 0 0;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`
const ImagemContainer = styled.div`
    flex-shrink: none;
    width: 100%;
    position: relative;


    &:hover {
        div {
            width: 100%;

        }
    }
    
    img {
        max-height: 214px;
        object-fit: contain;
        object-position: middle;
    }
`
const Mask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    overflow: hidden;
    max-height: 214px;
    background-color:rgba(255, 255, 255, 0.78);
    transition: .4s all ease-in-out;
    backdrop-filter: blur(8px);

    h2 {
        color: black;
        font-size: .7rem;
        word-break: break-word;
        text-align: center;
        min-width: 120px;
        width: 100%;
        transition: opacity 0.3s ease;
    }

`


const Livro = ({titulo, imagemCapa}) => {
    return (
        <LivroContainer>
            <ImagemContainer>
                <img src={imagemCapa} />
                <Mask>
                    <h2>{titulo}</h2>
                </Mask>
            </ImagemContainer>
        </LivroContainer>
    )
}

export default Livro;


