import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Main from './paginas/main';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function App() {
  const [modalShow, setModalShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Carregar os dados de usuários do arquivo JSON
    fetch('/users.json') 
    .then((response) => response.json())
      .then((data) => setUsersData(data))
      .catch((error) => console.error('Erro ao carregar dados de usuário', error));
  }, []);

  const handleLogin = () => {
    // Verificar as credenciais com base nos dados de usuários carregados
    const user = usersData.find((user) => user.username === username && user.password === password);

    if (user) {
      setLoggedIn(true);
      setModalShow(false);
    } else {
      alert('Nome de usuário ou senha inválido');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      <Navbar bg="primary" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <h3>
              <strong>NewsCine</strong>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                <h1>LANÇAMENTOS</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>

            {loggedIn ? (
              <div>
                <p><h5>Bem-vindo, <strong>{username}</strong>!</h5></p>
                <Button variant="primary" onClick={() => {
                  setLoggedIn(false);
                  setUsername('');
                }}>
                  LOGOUT
                </Button>
              </div>
            ) : (
              <Button variant="primary" onClick={() => setModalShow(true)}>
                LOGIN
              </Button>
            )}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/netflix">NETFLIX</Nav.Link>
                <Nav.Link href="/hbo">HBO MAX</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="page-cont" />
      <Main />
      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </>
  );
}

function LoginModal({
  show,
  onHide,
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Nome de Usuário
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default App;
