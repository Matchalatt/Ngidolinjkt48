import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import c3 from "../assests/jkt48music/c3.jpg"
import {HiOutlineIdentification} from "react-icons/hi";
import {FaBirthdayCake} from 'react-icons/fa'
import { MdOutlineBloodtype } from "react-icons/md"
import { TbZodiacLibra} from "react-icons/tb"
import {GiBodyHeight} from "react-icons/gi"
import {RiSlideshow3Line} from "react-icons/ri"
import {HiAcademicCap} from "react-icons/hi2"
import {SiInstagram} from "react-icons/si"
import {GrTwitter} from "react-icons/gr"
import {SiTiktok} from "react-icons/si"

const Profile3 = () => {
    return (
        <div className="Profile3">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={c3} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Text className="textfiony">
                "Memberikan kebahagiaan lewat gummy smileku, halo semuanya aku Chika"
            </Card.Text>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Yessica Tamara
                <br/>
                <HiAcademicCap/> Generasi : 7
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 24 September 2002
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : A
                <br/>
                <TbZodiacLibra/> Horoskop : Libra
                <br/>
                <GiBodyHeight/> Tinggi Badan : 165 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 213 Show

            </Card.Text>
           
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48.chika/"><SiInstagram/> jkt48.chika</Nav.Link>
            <Nav.Link href="https://twitter.com/Y_ChikaJKT48/"><GrTwitter/> Y_ChikaJKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@chikajkt48"><SiTiktok/> @chikajkt48</Nav.Link>
            </Card.Text>
           
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Chika"><RiSlideshow3Line/> Chika/チカ</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile3