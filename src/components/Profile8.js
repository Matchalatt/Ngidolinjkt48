import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import c8 from "../assests/jkt48music/c8.jpg"
import {HiOutlineIdentification} from "react-icons/hi";
import {FaBirthdayCake} from 'react-icons/fa'
import { MdOutlineBloodtype } from "react-icons/md"
import {TbZodiacAquarius, TbZodiacCapricorn} from "react-icons/tb"
import {GiBodyHeight} from "react-icons/gi"
import {RiSlideshow3Line} from "react-icons/ri"
import {HiAcademicCap} from "react-icons/hi2"
import {SiInstagram} from "react-icons/si"
import {GrTwitter} from "react-icons/gr"
import {SiTiktok} from "react-icons/si"

const Profile8 = () => {
    return (
        <div className="Profile8">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={c8} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Text className="textfiony">"Seperti pizza yang selalu di nanti-nantikan semua orang, selalu nantikan aku ya. Halo aku Marsha"</Card.Text>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Marsha Lenathea Lapian
                <br/>
                <HiAcademicCap/> Generasi : 9
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 9 Januari 2006
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : O
                <br/>
                <TbZodiacCapricorn/> Horoskop : Capricorn
                <br/>
                <GiBodyHeight/> Tinggi Badan : 163 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 146 Show

            </Card.Text>
            
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48.marsha/"><SiInstagram/> jkt48.marsha</Nav.Link>
            <Nav.Link href="https://twitter.com/L_MarshaJKT48/"><GrTwitter/> L_MarshaJKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@marsha.jkt48"><SiTiktok/> @marsha.jkt48</Nav.Link>
            </Card.Text>
            
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Marsha"><RiSlideshow3Line/> Marsha/マーシャ</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile8