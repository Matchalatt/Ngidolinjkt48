import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import c1 from "../assests/jkt48music/c1.jpg"
import {HiOutlineIdentification} from "react-icons/hi";
import {FaBirthdayCake} from 'react-icons/fa'
import { MdOutlineBloodtype } from "react-icons/md"
import { TbZodiacCancer} from "react-icons/tb"
import {GiBodyHeight} from "react-icons/gi"
import {RiSlideshow3Line} from "react-icons/ri"
import {HiAcademicCap} from "react-icons/hi2"
import {SiInstagram} from "react-icons/si"
import {GrTwitter} from "react-icons/gr"
import {SiTiktok} from "react-icons/si"

const Profile1 = () => {
    return (
        <div className="Profile1">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={c1} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Text className="textfiony">"Bagai kucing yang kalem tapi akan selalu memikat hati kamu, halo semuanya aku Adel"</Card.Text>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Reva Fidela
                <br/>
                <HiAcademicCap/> Generasi : 8
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 14 Juli 2006
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : A
                <br/>
                <TbZodiacCancer/> Horoskop : Cancer
                <br/>
                <GiBodyHeight/> Tinggi Badan : 159 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 138 Show

            </Card.Text>
           
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48.adel/"><SiInstagram/> jkt48.adel</Nav.Link>
            <Nav.Link href="https://twitter.com/R_AdelJKT48/"><GrTwitter/> R_AdelJKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@adeljkt48"><SiTiktok/> @adeljkt48</Nav.Link>
            </Card.Text>
           
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Adel"><RiSlideshow3Line/> Adel/アデル</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile1