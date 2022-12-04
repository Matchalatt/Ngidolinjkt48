import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import c2 from "../assests/jkt48music/c2.jpg"
import {HiOutlineIdentification} from "react-icons/hi";
import {FaBirthdayCake} from 'react-icons/fa'
import { MdOutlineBloodtype } from "react-icons/md"
import {TbZodiacCapricorn} from "react-icons/tb"
import {GiBodyHeight} from "react-icons/gi"
import {RiSlideshow3Line} from "react-icons/ri"
import {HiAcademicCap} from "react-icons/hi2"
import {SiInstagram} from "react-icons/si"
import {GrTwitter} from "react-icons/gr"
import {SiTiktok} from "react-icons/si"

const Profile2 = () => {
    return (
        <div className="Profile2">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={c2} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Text className="textfiony">"Aku datang bagaikan embun pagi yang menyejukan hati"</Card.Text>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Adzan Shaliha
                <br/>
                <HiAcademicCap/> Generasi : 9
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 8 Januari 2005
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : B
                <br/>
                <TbZodiacCapricorn/> Horoskop : Capricorn
                <br/>
                <GiBodyHeight/> Tinggi Badan : 160 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 139 Show

            </Card.Text>
           
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48.ashel/"><SiInstagram/> jkt48.ashel</Nav.Link>
            <Nav.Link href="https://twitter.com/S_AshelJKT48/"><GrTwitter/>S_AshelJKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@asheljkt48"><SiTiktok/> @asheljkt48</Nav.Link>
            </Card.Text>
          
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Ashel"><RiSlideshow3Line/> Ashel /アシェル</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile2