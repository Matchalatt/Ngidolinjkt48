import { Button, Col, Container, Row } from 'react-bootstrap';
import '../style/LandingPage.css'

const Home = () => {
    return (
      <div className="myBG">
         <div className="Home">
       <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
           <div className="title">NGOMONGIN JKT48</div>
           <div className="introbutton mt-4 text-center">
           <Button variant="light" className="text-danger">Lihat Semua List</Button>
           </div>
          </Col>
        </Row>
       </Container>
      </div>
      </div>
       
    )
}

export default Home