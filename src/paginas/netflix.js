import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const estilo = {
  color: 'blue',
  marginRight: '1em',
};
function Netflix() {
  document.body.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20190606/pngtree-white-texture-brickwall-image_118779.jpg')";
 // document.body.style.backgroundImage = "url('https://static.vecteezy.com/ti/vetor-gratis/p1/4748132-cinema-seamless-pattern-with-film-reel-clapper-popcorn-3d-glasses-soda-cup-cinema-ticket-and-stars-in-retro-style-movie-vector-background-vetor.jpghttps://static.vecteezy.com/ti/vetor-gratis/p1/4748132-cinema-seamless-pattern-with-film-reel-clapper-popcorn-3d-glasses-soda-cup-cinema-ticket-and-stars-in-retro-style-movie-vector-background-vetor.jpg')";
  //document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_4HC3SIhCG0eSlGWsjBtAkFAxDB4tl4p3z_iRXRWhDk-pBXV6wAgvJtBS5UN5W1Vf6I&usqp=CAU')";

  const [lgShow, setLgShow] = useState(false);
    return ( 
      <>
      <div >
      
      <Container>
      <Row>
        <Col sm={20}>
          
        <Container fluid>
      <Row>
        <Col><h1 style={estilo}><strong>ÚLTIMOS LANÇAMENTOS NETFLIX</strong></h1></Col>
      </Row>
    </Container>
  
      <br/><br/><br/>

      <Container>
      <Row> 
        <Col><img width={'200'} heigh={'200'}src='https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABUrPzgykDooaunrtCzpzdfThj8B9A8VmXY4rbmN3_AGdNBkkvGMYtIdF_EcR6fh_OqU0YODeC9-M35x1agoBIuumu_fP5I2DAi4fekErP8cIeznj8zj1J7JaTEzlfTcfBZDbOg.jpg?r=eb8'/></Col>
         <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Vasco Rossi: Toda uma Vida</strong></h3>
            <h5 >O astro do rock italiano Vasco Rossi revela detalhes íntimos da vida pessoal e da bem-sucedida carreira que já dura décadas.
              Estrelando:Vasco Rossi</h5>
              <h4><strong>27/09/2023</strong></h4>
              </div> </Col>
        <Col></Col>
        </Row>

      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWJHIJBPJd8yideeliN6EXI6x01aNsHsJHLZTUtJ9t6VHOFRok-c2Iv7Vlhb4arqvMA5XqdMlTh9tbWk_duYuH9sbRvtw-Kc7InGJxrOKpaodAw4ich-WJSFHzzdaN9zCBymXQ.jpg?r=5c0'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Encontros Extraterrestres</strong></h3>
            <h5>Esta série documental investiga aparições de OVNIs nos últimos 50 anos, com testemunhos, entrevistas com especialistas e novas evidências.</h5>
              <h4><strong>27/09/2023</strong></h4>
              </div> </Col>
        <Col></Col>
        </Row>
        
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQfxgLslBEcGlagHAg_EKpTCv-zZfhpQuxy_9NY1hMZAPAdJpH1kdODAsQJ0y-RVOWQShi3oiUqVwKtYUp0oOiOX-3DkXgEKDRuozHyMWuYLkfXjl5yCyxVFiKA0OBYemKjwgQ.jpg?r=70b'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>A Incrível História de Henry Sugar</strong></h3>
            <h5>Wes Anderson dirige esta adaptação do conto de Roald Dahl sobre um homem rico determinado a dominar uma técnica extraordinária para trapacear no jogo.
Estrelando:Benedict Cumberbatch,Ralph Fiennes,Dev Patel</h5>
              <h4><strong>27/09/2023</strong></h4>
              </div> </Col>
        <Col></Col>
        </Row>

      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXz0ihrXPpa-nBf6mRm58tdIKhujDN178-0EH9R2P9Yyvd62k3XlNx95gyvxTznanm7nB2Y-uQJtmKDyGAsMdlU2VwBhs7B_kAn_Qz0HXzkgLxRH90QI2ULsScLgCgevY4fZyA.jpg?r=8fd'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Street Flow 2</strong></h3>
            <h5>Lutando para superar um ciclo de traição, vingança e violência, os irmãos Traoré continuam em busca de um futuro melhor em Paris.
Estrelando:Kery James,Jammeh Diangana,Bakary Diombera</h5>
              <h4><strong>27/09/2023</strong></h4>
              </div> </Col>
        <Col></Col>
        </Row>

      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdH2cX7WEt9sFjvmYyEqFna_79H1RFkRkL2e306cpoWtnU1yfAoY2tp0c-A1w6iHrobNRXNjAcv-yKGzGQf0G8sNJppfXGIF54v2OznAOCdQUFRiA0GXEoxvELUjuyuYBf3zzg.jpg?r=3b8'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Castlevania: Noturno</strong></h3>
            <h5>Enquanto a revolução assola a França, Richter Belmont luta para manter o legado da família e impedir a ascensão de uma vampira brutal e gananciosa.
Estrelando:Edward Bluemel,Pixie Davies,Thuso Mbedu
Criação:Clive Bradley</h5>
              <h4><strong>28/09/2023</strong></h4>
              </div> </Col>
        <Col></Col>
        </Row>

      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZWZnnd40bpc2xrsSxLPq5_r1gP1ZnFucuOt2D4CMFyYOHNEM_iSxWMKAy7fLjpLyV8hQggNGTmcXcU7FTbO4l_ORenWuK8Yo9RcEp7ti8GMGpw8qCK5dCTWEngqJbFPVyKZXQ.jpg?r=b0b'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Ice Cold: O Caso Jessica Wongso</strong></h3>
            <h5>Este documentário investiga as perguntas que ficaram sem resposta após o julgamento de Jessica Wongso pela morte de sua melhor amiga, Mirna Salihin.</h5>
              <h4><strong>28/09/2023</strong></h4>
              </div> </Col>
        <Col></Col>
        </Row>
        
      <br/><br/>
      <Row>
        <Col><img width={'200'} heigh={'200'}src='https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABW2lY4tQyWhM1Dolz1tNuI3c3bZQIrmPObNzkyaYtBObKG2WhoNEf1Yufb1sU0ocpqrNVW_6-UUpXEmWdJOKWuicVMl8wD7apZjwU91RcH2YwaM5HQy4Hh5mc7i_S7roTdR9ng.jpg?r=f42'/></Col>
        <Col><div class="shadow-lg p-3 mb-5 bg-white rounded"><h3><strong>Do Not Disturb</strong></h3>
            <h5>Um homem de meia-idade consegue emprego em um hotel depois da pandemia, mas alguns hóspedes transformam sua primeira noite em uma aventura insana.</h5>
              <h4><strong>29/09/2023</strong></h4>
              </div> </Col>
        <Col></Col>
        </Row>
        
      <br/><br/>
      </Container>

        </Col>

        <Col sm={4}>
          
        <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        

             
        <Col></Col>
        
      </Row>

        </Col>
      </Row>
      
      </Container>

      <Container>
        <div>

        <a href='/' > <Button variant="dark">Voltar</Button></a>
        </div>
      
      </Container>
      
    </div>
      </>
    );
}
export default Netflix;