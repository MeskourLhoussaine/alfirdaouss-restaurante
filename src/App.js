import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id="app">
      {/* Transparent Navbar */}
      <Navbar expand="lg" className="fixed-top bg-transparent custom-navbar shadow-sm">
        <Container fluid="md">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 text-success">
            <FontAwesomeIcon icon={faUtensils} size="xl" />
            <div className="d-flex flex-column text-end lh-sm">
              <span className="fw-bold fs-6">Al Firdaousse</span>
              <small className="fw-bold fs-6">Restaurant</small>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            <Nav className="mx-auto gap-3">
              <Link to="/" className="nav-link text-uppercase fw-semibold text-success">
                Home
              </Link>
              <Link to="/menu" className="nav-link text-uppercase fw-semibold text-success">
                Menu
              </Link>
             { <Link to="#" className="nav-link text-uppercase fw-semibold text-success">
                About
              </Link>}
              <Link to="#" className="nav-link text-uppercase fw-semibold text-success">
                Contact
              </Link>
            </Nav>

          {/* 
<Link to="#" className="text-decoration-none">
  <button
    type="button"
    className="btn btn-success px-4 py-2 rounded-1 text-capitalize text-nowrap"
  >
    Book a table
  </button>
</Link> 
*/}

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
