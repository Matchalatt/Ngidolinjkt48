import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import fionyImage2 from "../assests/jkt48music/fiony2.jpg"
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

const Profile10 = () => {
    return (
        <div className="Profile10">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={fionyImage2} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Fiony Alveria Tantri
                <br/>
                <HiAcademicCap/> Generasi : 8
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 4 Februari 2002
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : O
                <br/>
                <TbZodiacAquarius/> Horoskop : Aquarius
                <br/>
                <GiBodyHeight/> Tinggi Badan : 158 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 174 Show

            </Card.Text>
            <br/>
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48.fiony/"><SiInstagram/> jkt48.fiony</Nav.Link>
            <Nav.Link href="https://twitter.com/A_FionyJKT48/"><GrTwitter/> A_FionyJKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@fionyjkt48"><SiTiktok/> @fionyjkt48</Nav.Link>
            </Card.Text>
            <br/>
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Fiony"><RiSlideshow3Line/> Fiony /フィオニー</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile10