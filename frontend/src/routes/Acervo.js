import styled from "styled-components";
import Container from "../components/Container";
import Livro from "../components/Livro";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { getLivros } from "../services/livros";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ContainerRow = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  

  hr {
    height: 2px;
    border: none;
    background: #555555;
  }
`;

const RowTitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  color: #555555;
`;

const LivrosContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: flex-start;
  max-width: 1000px;
  overflow: auto;
  gap: 1rem;
  padding-top: .5rem;
`

const Acervo = () => {
  const [livros, setLivros] = useState([]);

  async function fetchLivros() {
    try {
      const livrosResultado = await getLivros();
      
      setLivros(livrosResultado);
      
    } catch (error) {
      
    }
  }

  function renderLivros() {
    try{
      if(livros instanceof AxiosError) {
        throw new Error(livros.message)
      }
      return livros.map((livro) => (
        <SwiperSlide>
          <Livro key={livro.id} titulo={livro.titulo} imagemCapa={livro.imagem}/>
        </SwiperSlide>
      ))
    } catch(erro) {
      return <div>{erro.message}</div>
    }
  }

  useEffect(() => {
    fetchLivros();
  }, []);
  console.log(livros)
  return (
    <Container>
      <ContainerRow>
        <RowTitle>Destaques</RowTitle>
        <hr />
        <LivrosContainer>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {renderLivros()}
          </Swiper>
        </LivrosContainer>
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
  );
};

export default Acervo;
