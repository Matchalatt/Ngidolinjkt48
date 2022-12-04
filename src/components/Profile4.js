import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import c4 from "../assests/jkt48music/c4.jpg"
import {HiOutlineIdentification} from "react-icons/hi";
import {FaBirthdayCake} from 'react-icons/fa'
import { MdOutlineBloodtype } from "react-icons/md"
import { TbZodiacSagittarius} from "react-icons/tb"
import {GiBodyHeight} from "react-icons/gi"
import {RiSlideshow3Line} from "react-icons/ri"
import {HiAcademicCap} from "react-icons/hi2"
import {SiInstagram} from "react-icons/si"
import {GrTwitter} from "react-icons/gr"
import {SiTiktok} from "react-icons/si"

const Profile4 = () => {
    return (
        <div className="Profile4">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={c4} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Text className="textfiony">"Peduli dan berbaik hati siapakah dia ??? Christy"</Card.Text>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Angelina Christy
                <br/>
                <HiAcademicCap/> Generasi : 7
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 5 Desember 2005
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : O
                <br/>
                <TbZodiacSagittarius/> Horoskop : Sagittarius
                <br/>
                <GiBodyHeight/> Tinggi Badan : 163 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 227 Show

            </Card.Text>
            
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48.christy/"><SiInstagram/> jkt48.christy</Nav.Link>
            <Nav.Link href="https://twitter.com/A_ChristyJKT48/"><GrTwitter/> A_ChristyJKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@christyjkt48"><SiTiktok/> @christyjkt48</Nav.Link>
            </Card.Text>
           
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Christy"><RiSlideshow3Line/> Christy/クリスティー</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile4