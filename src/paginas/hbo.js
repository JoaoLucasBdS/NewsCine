import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const estilo = {
  color: 'blue',
  marginRight: '1em',
};
function HBO() {
  document.body.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20190606/pngtree-white-texture-brickwall-image_118779.jpg')";
 // document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/459886815/vector/cinema-seamless-vector-background.jpg?s=612x612&w=0&k=20&c=OxB3ofXfjdfB0qIJsumH_pAr7LdSQLC4na5hHg8s0YI=')";

  const [lgShow, setLgShow] = useState(false);
    return ( 
      <>
      <div >
      
      <Container>
      <Row>
        <Col sm={12}>
          
        <Container fluid>
      <Row>
        <Col><h1 style={estilo}><strong>ÚLTIMOS LANÇAMENTOS HBO MAX</strong></h1></Col>
      </Row>
    </Container>
  
      <br/><br/><br/>

      <Container>
      <Row> 
        <Col><img width={'200'} heigh={'200'}src='https://pipocanamadrugada.com.br/site/wp-content/uploads/2023/06/Que-Horas-Eu-Te-Pego.jpg'/></Col>
         <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Que Horas Eu Te Pego?</strong></h3>
            <h5 >Jennifer Lawrence estrela esta comédia como uma mulher totalmente irresponsável que responde ao anúncio de dois pais procurando uma namorada fictícia para que seu tímido filho ganhe confiança antes de começar a universidade.
                  Estrelando: Andrew Barth Feldman, Laura Benanti</h5>
              <h4><strong>29/09/2023</strong></h4>
              </div> </Col>
        <Col></Col>
        </Row>

      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://m.media-amazon.com/images/M/MV5BZWEyNGVhNGItNTY1Mi00NGZkLWI2ODMtY2JhNzlhNGIyNDFjXkEyXkFqcGdeQXVyNDM1ODc2NzE@._V1_.jpg'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Breaking Point: Paixão à Dança Filme</strong></h3>
            <h5>Dois irmãos dançarinos desafiam o luto e suas diferenças para competir nas seletivas nacionais de breakdance da Grã-Bretanha e conseguir uma vaga na equipe que representará o país no Campeonato Mundial de Londres.</h5>
              
              </div> </Col>
        <Col></Col>
        </Row>
        
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://images.justwatch.com/poster/307082352/s718/venus-2022.jpg'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Vênus</strong></h3>
            <h5>Uma noite, após um show, Lucía decide roubar um saco de comprimidos de ecstasy da boate e acaba 
              levando uma facada na perna ao fugir de de um grupo de criminosos perigosos. Ferida e querendo evitar ser encontrada em um hospital, 
              Lucía busca refúgio em um prédio de apartamentos em ruínas chamado "Venus" com sua irmã e sobrinha. Mas logo percebe que uma força 
              sobrenatural antiga e malévola se esconde atrás das paredes do antigo edifício.</h5>
             
              </div> </Col>
        <Col></Col>
        </Row>

      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://m.media-amazon.com/images/S/pv-target-images/39e3504d8ee5432be2735e48008df16f516b78db4ebf6612dca6e7f899608ebf.jpg'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Anaconda 2 - A Caçada pela Orquídea</strong></h3>
            <h5>Enquanto exploram a selva de Borneo em busca da mítica orquídea negra, responsável por garantir vida eterna, um grupo de cientistas se depara com monstruosas 
              cobras Anacondas, que vêm se alimentando das orquídeas há anos.</h5>
              
              </div> </Col>
        <Col></Col>
        </Row>

      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://leiturafilmica.com.br/wp-content/uploads/2022/09/segredos-do-passado-poster.jpg'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Segredos do Passado</strong></h3>
            <h5>Aaron retorna à sua cidade natal para o funeral de seu amigo de infância, que assassinou esposa e filho antes de tirar a própria vida. Ele logo começa a suspeitar que a morte de seu amigo e a de uma jovem 
              podem estar conectadas.</h5>
             
              </div> </Col>
        <Col></Col>
        </Row>

      </Container>

        </Col>
             
        <Col></Col>
        
      </Row>
    
      </Container>
      <br/><br/>
      <Container>
        <div>

        <a href='/' > <Button variant="dark">Voltar</Button></a>
        </div>
      
      </Container>
      
    </div>
      </>
    );
}
export default HBO;