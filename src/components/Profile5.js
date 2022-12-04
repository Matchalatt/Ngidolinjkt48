import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import c5 from "../assests/jkt48music/c5.jpg"
import {HiOutlineIdentification} from "react-icons/hi";
import {FaBirthdayCake} from 'react-icons/fa'
import { MdOutlineBloodtype } from "react-icons/md"
import {TbZodiacAquarius} from "react-icons/tb"
import {GiBodyHeight} from "react-icons/gi"
import {RiSlideshow3Line} from "react-icons/ri"
import {HiAcademicCap} from "react-icons/hi2"
import {SiInstagram} from "react-icons/si"
import {GrTwitter} from "react-icons/gr"
import {SiTiktok} from "react-icons/si"

const Profile5 = () => {
    return (
        <div className="Profile5">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={c5} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Text className="textfiony">"Gadis skolaris yang suka berimajinasi terangi hari... mu dengan senyum karamelku, 
            halo semuanya aku Freya"</Card.Text>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Freyana Shifa Jayawardana
                <br/>
                <HiAcademicCap/> Generasi : 7
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 13 Februari 2006
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : B
                <br/>
                <TbZodiacAquarius/> Horoskop : Aquarius
                <br/>
                <GiBodyHeight/> Tinggi Badan : 154 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 246 Show

            </Card.Text>
            
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48.freya/"><SiInstagram/> jkt48.freya</Nav.Link>
            <Nav.Link href="https://twitter.com/Freya_JKT48/"><GrTwitter/> Freya_JKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@freyajkt48"><SiTiktok/> @freyajkt48</Nav.Link>
            </Card.Text>
            
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Freya"><RiSlideshow3Line/> Freya/フレヤ</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile5