import {Card, Container, Row, Col, Image, Nav} from "react-bootstrap"
import '../style/LandingPage.css'
import fionyImage from "../assests/jkt48music/fiony.jpg"
import adelImage from '../assests/jkt48music/adel.jpg'
import ashelImage from '../assests/jkt48music/ashel jkt48.jpg'
import chikaImage from '../assests/jkt48music/chika.jpg'
import christyImage from '../assests/jkt48music/christy.jpg'
import freyaImage from '../assests/jkt48music/freya.jpg'
import gitaImage from '../assests/jkt48music/gita.jpg'
import graciaImage from '../assests/jkt48music/gracia jkt48.jpg'
import marshaImage from '../assests/jkt48music/marsha.jpg'
import shaniImage from '../assests/jkt48music/shani.jpg'
import siscaImage from '../assests/jkt48music/sisca.jpg'
import zeeImage from '../assests/jkt48music/zee.jpg'
import floraImage from '../assests/jkt48music/flora.jpg'

const Member = () => {
    return (
<div className="Member">
    <br/><br/><br/>
    <Container>
        <Row>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={fionyImage} alt="fiony JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile">Fiony JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={adelImage} alt="adel JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile1">Adel JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={ashelImage} alt="ashel JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile2">Ashel JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={chikaImage} alt="chika JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile3">Chika JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={christyImage} alt="christy JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile4">Christy JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={freyaImage} alt="freya JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile5">Freya JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={gitaImage} alt="gita JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile6">Gita JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={graciaImage} alt="gracia JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile7">Gracia JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={marshaImage} alt="marsha JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile8">Marsha JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={shaniImage} alt="shani JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile9">Shani JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={siscaImage} alt="sisca JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile10">Sisca JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={zeeImage} alt="zee JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile11">Zee JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={2}>
                <Card className="text-center jkt48Image">
                    <Image src={floraImage} alt="flora JKT48"/>
                    <div className="bg-light">
                        <div className="m-2 p-1 text-dark">
                            <Nav.Link className="text-center" href="/Profile12">Flora JKT48</Nav.Link>
                        </div>
                    </div>
                </Card>
            </Col>
           
        </Row>
    </Container>

</div>
    )
}

export default Member