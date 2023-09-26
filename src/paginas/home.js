import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/459886815/vector/cinema-seamless-vector-background.jpg?s=612x612&w=0&k=20&c=OxB3ofXfjdfB0qIJsumH_pAr7LdSQLC4na5hHg8s0YI=')";
  //document.body.style.backgroundImage = "url('https://st.depositphotos.com/1479444/3723/v/450/depositphotos_37236589-stock-illustration-pattern-cinema-doodles.jpg')";

  const [lgShow, setLgShow] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);
  const [lgShow4, setLgShow4] = useState(false);
  const [lgShow5, setLgShow5] = useState(false);
  const [lgShow6, setLgShow6] = useState(false);


    return ( 
        <Container>
      <Row>
        <Col xs={12} md={8}>

       { /*INICIO CAROUSEL */}
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.telefonino.net/app/uploads/2022/03/android-12l-netflix-hd-widevine-l3-copertina-1060x424.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Melhores titulos</h3>
          <p>Descubra os melhores filmes, séries e animes da atualidade</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.ome.lt/-3Kc4mOH2Kri3fqkcdwsBzrTJsk=/987x0/smart/uploads/bilheteria/images/A-Freira-2-The-Nun-2-James-Wan-Warner-Bros.-Pictures-Cinemow-3_nWq3EaG.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>A Noite das Bruxas chega perto, mas não assusta A Freira 2 na bilheteria dos EUA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.ome.lt/R8O6_LWKaalHTna8tcvTwDu7TR0=/987x0/smart/uploads/conteudo/fotos/SE_401_Emma_Mackey.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sem forçação de barra, Sex Education encerra o curso sem medo do fim</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>        
    </Col>

    { /*INICIO CARDS */}
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.ome.lt/FryFkCciN2T5KL2kkFHT9AYUGkY=/480x360/smart/filer_public/27/67/2767765c-1088-43bb-958e-1b64ae0f095d/capa_de_destaque_-_480_x_360_35.png" />
      <Card.Body>
        <Card.Title>Invasão Secreta ganha data!</Card.Title>
        <Card.Text>
        Nova produção da Marvel chega em 21 de junho.
        </Card.Text>
        { /*INICIO MODAL */}
        <Button onClick={() => setLgShow(true)}>Saiba mais</Button>
      <Modal id="primeiromodal"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg-primeiro">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg-primeiro">
            Saiba mais
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Row>
            <Col xs={6} md={4}>
            <Figure>
      <Figure.Image
        src="https://cdn.ome.lt/FryFkCciN2T5KL2kkFHT9AYUGkY=/480x360/smart/filer_public/27/67/2767765c-1088-43bb-958e-1b64ae0f095d/capa_de_destaque_-_480_x_360_35.png"
      />
    </Figure>
            </Col>
            <Col xs={12} md={8}>
            <h1>Invasão Secreta: Série da Marvel estrelada por Samuel L. Jackson ganha data</h1>
            Invasão Secreta, nova série do MCU centrada em Nick Fury (Samuel L. Jackson), finalmente ganhou data de lançamento. De acordo com o próprio Disney+, a nova produção da Marvel chega em 21 de junho.
            Estrelada por Samuel L. Jackson, a série adapta um dos maiores eventos da Marvel Comics dos últimos vinte anos, no qual os Skrulls estão infiltrados na Terra. No MCU, Nick Fury fez essa descoberta em Capitã Marvel, mas os alienígenas na época não tinham ambições vilanescas.
            </Col>
            <a href='/Trailer_invasao' ><button class="btn btn-warning">Confira agora!</button></a>
          </Row></Modal.Body>
      </Modal>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <br/><br/>
      
      <Row>
        {/*Inicio segundo card */}
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ovicio.com.br/wp-content/uploads/2023/03/20230321-ovicio-chris-tucker-hora-rush.jpg" />
      <Card.Body>
        <Card.Title>A Hora do Rush 4</Card.Title>
        <Card.Text>
        Chris Tucker diz que está animado para continuação        </Card.Text>
        { /*INICIO MODAL */}
        <Button onClick={() => setLgShow2(true)}>Saiba mais</Button>
      <Modal id="primeiromodal"
        size="lg"
        show={lgShow2}
        onHide={() => setLgShow2(false)}
        aria-labelledby="example-modal-sizes-title-lg-primeiro">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg-primeiro">
            Saiba mais
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Row>
            <Col xs={6} md={4}>
            <Figure>
      <Figure.Image
        src="https://ovicio.com.br/wp-content/uploads/2023/03/20230321-ovicio-chris-tucker-hora-rush.jpg"
      />
    </Figure>
            </Col>
            <Col xs={12} md={8}>
            <h1>A Hora do Rush 4: Chris Tucker diz que está animado para continuação</h1>
            Depois de Jackie Chan confirmar que A Hora do Rush 4 está em negociação,
             Chris Tucker - quem co-estrelava ao lado de Chan - disse que está ansioso para o lançamento da continuação do filme de ação.            </Col>
            <a href='/Trailer_horadorush' ><button class="btn btn-warning">Confira agora!</button></a>
          </Row></Modal.Body>
      </Modal>
      </Card.Body>
    </Card>
        </Col>

      {/*Inicio terceiro card */}
        <Col xs={6} md={4}>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.ome.lt/-lTmklDz90bTamQUVinY12IDULU=/480x360/smart/filer_public/e9/d0/e9d05c1e-1ced-404e-9f18-f6dc190fafb2/john-wick-4-tem-cena-pos-creditos.jpg" />
      <Card.Body>
        <Card.Title>Futuro de John Wick está aberto, diz produtor</Card.Title>
        <Card.Text>
        John Wick 4 tem cena pós-créditos?
        Filme bate Shazam! 2 nos EUA.
        </Card.Text>
        { /*INICIO MODAL */}
        <Button onClick={() => setLgShow3(true)}>Saiba mais</Button>
      <Modal id="primeiromodal"
        size="lg"
        show={lgShow3}
        onHide={() => setLgShow3(false)}
        aria-labelledby="example-modal-sizes-title-lg-primeiro">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg-primeiro">
            Saiba mais
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Row>
            <Col xs={6} md={4}>
            <Figure>
      <Figure.Image
        src="https://www.otempo.com.br/image/contentid/policy:1.2836019:1679576402/image-John-Wick-4-tem-um-final-feliz-Keanu-Reeves-responde.jpg"
      />
    </Figure>
            </Col>
            <Col xs={12} md={8}>
            <h1>John Wick 4: Produtor diz que futuro da franquia segue aberto</h1>
            O final de John Wick: Baba Yaga pegou muitas pessoas de surpresa: em uma das últimas cenas do longa, o personagem-título vivido por Keanu Reeves é baleado e -- aparentemente -- sucumbe aos ferimentos da bala. E somado à cena pós-créditos, o futuro do assassino de aluguel parece indecifrável. Mas então, John morreu ou não? Nem o produtor sabe da franquia sabe.
            </Col>
            <a href='/Trailer_jhonwick' ><button class="btn btn-warning">Confira agora!</button></a>
          </Row></Modal.Body>
      </Modal>   
      </Card.Body>
    </Card>        
    </Col>

      {/*Inicio quarto card */}
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.ome.lt/OeMOu_9bPmH3Z8HSDon7k7tC6nE=/480x360/smart/filer_public/b5/43/b543a66b-9981-452a-b7b8-a0ebd329b9b4/maggie_1.jpg" />
      <Card.Body>
        <Card.Title>TWD: Dead City ganha nova data</Card.Title>
        <Card.Text>
        Derivada é estrelada por Maggie e Negan
        </Card.Text>

        { /*INICIO MODAL */}
        <Button onClick={() => setLgShow4(true)}>Saiba mais</Button>
      <Modal id="primeiromodal"
        size="lg"
        show={lgShow4}
        onHide={() => setLgShow4(false)}
        aria-labelledby="example-modal-sizes-title-lg-primeiro">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg-primeiro">
            Saiba mais
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Row>
            <Col xs={6} md={4}>
            <Figure>
      <Figure.Image
         src="https://www.tvinsider.com/wp-content/uploads/2023/03/the-walking-dead-dead-city-maggie-lauren-cohan.jpg"
      />
    </Figure>
            </Col>
            <Col xs={12} md={8}>
            <h1>The Walking Dead: Dead City ganha data de lançamento e novo teaser</h1>
            O final de John Wick: Baba Yaga pegou muitas pessoas de surpresa: em uma das últimas cenas do longa, o personagem-título vivido por Keanu Reeves é baleado e -- aparentemente -- sucumbe aos ferimentos da bala. E somado à cena pós-créditos, o futuro do assassino de aluguel parece indecifrável. Mas então, John morreu ou não? Nem o produtor sabe da franquia sabe.
            </Col>
            <a href='/Trailer_TWD' ><button class="btn btn-warning">Confira agora!</button></a>
          </Row></Modal.Body>
      </Modal>
      </Card.Body>
    </Card>        
    </Col>
      </Row>
      <br/><br/>

      <Row>
        {/*Inicio quinto card */}
        <Col xs={6}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.ome.lt/Ngjd2ch4-dxWC-mHhTFUYC4u0lk=/480x360/smart/filer_public/d2/83/d2834ec8-4e7c-44ce-8617-cb790478ea81/prs_220927_gs_0228.jpg" />
      <Card.Body>
        <Card.Title>Especial de Power Rangers ganha trailer</Card.Title>
        <Card.Text>
        Série chega à Netflix em abril
        </Card.Text>
        <Button onClick={() => setLgShow5(true)}>Saiba mais</Button>
      <Modal id="primeiromodal"
        size="lg"
        show={lgShow5}
        onHide={() => setLgShow5(false)}
        aria-labelledby="example-modal-sizes-title-lg-primeiro">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg-primeiro">
            Saiba mais
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Row>
            <Col xs={6} md={4}>
            <Figure>
      <Figure.Image
         src="https://occ-0-2774-3212.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABccJbYwIVGIyyanPPsTc1f76Ix_HeHEqcLlxZL6msZX1c8FraoIe8z4g2-BIP_ofM7Uj3shfffYb-QCkuGz1GqBm18Hoe7RMjMwc.jpg?r=c2e"
      />
    </Figure>
            </Col>
            <Col xs={12} md={8}>
            <h1>Power Rangers: Agora e Sempre | Rangers originais se reúnem em trailer</h1>
            Mighty Morphin Power Rangers: Agora e Sempre, filme que reúne uma das primeiras formações ocidentais dos Power Rangers, ganhou um trailer eletrizante nesta quarta-feira (22).
            </Col>
            <a href='/Trailer_powerrangers' ><button class="btn btn-warning">Confira agora!</button></a> 
          </Row></Modal.Body>
      </Modal>
      </Card.Body>
    </Card>
    
    </Col>
        <Col xs={6}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.ome.lt/tYVaHkrzRVq1I3FEvBlCbzitt4Y=/480x360/smart/filer_public/a1/79/a1795dec-12fe-4358-9aaf-294738d4584d/grogu.jpg" />
      <Card.Body>
        <Card.Title>The Mandalorian detalha passado de Grogu</Card.Title>
        <Card.Text>
        Episódio faz referência a Ameaça Fantasma
        </Card.Text>

        { /*INICIO MODAL */}
        <Button onClick={() => setLgShow6(true)}>Saiba mais</Button>
      <Modal id="primeiromodal"
        size="lg"
        show={lgShow6}
        onHide={() => setLgShow6(false)}
        aria-labelledby="example-modal-sizes-title-lg-primeiro">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg-primeiro">
            Saiba mais
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Row>
            <Col xs={6} md={4}>
            <Figure>
      <Figure.Image
         src="https://disneyplusbrasil.com.br/wp-content/uploads/2023/03/baby-Yoda-Grogu.jpg"
      />
    </Figure>
            </Col>
            <Col xs={12} md={8}>
            <h1>The Mandalorian finalmente revelou o passado de Grogu</h1>
            Até agora, The Mandalorian havia apenas insinuado o que aconteceu com Grogu na noite da Ordem 66. Vimos cenas rápidas de um grupo de Jedis tentando proteger a criança dos Clone Troopers corrompidos, mas não tínhamos ideia de quem o resgatou com segurança para fora de Coruscant e das garras do Império.
            </Col>
            <a href='/Trailer_Mandalorian' ><button class="btn btn-warning">Confira agora!</button></a> 
          </Row></Modal.Body>
      </Modal>
      </Card.Body>
    </Card>
    </Col>
      </Row>

    </Container>
    );
}
export default Home;