import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import c6 from "../assests/jkt48music/c6.jpg"
import {HiOutlineIdentification} from "react-icons/hi";
import {FaBirthdayCake} from 'react-icons/fa'
import { MdOutlineBloodtype } from "react-icons/md"
import {TbZodiacAquarius, TbZodiacCancer} from "react-icons/tb"
import {GiBodyHeight} from "react-icons/gi"
import {RiSlideshow3Line} from "react-icons/ri"
import {HiAcademicCap} from "react-icons/hi2"
import {SiInstagram} from "react-icons/si"
import {GrTwitter} from "react-icons/gr"
import {SiTiktok} from "react-icons/si"

const Profile6 = () => {
    return (
        <div className="Profile6">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={c6} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Text className="textfiony">"Diam bukan berarti tidak memperhatikanmu, halo semua aku Gita"</Card.Text>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Gita Sekar Andarini
                <br/>
                <HiAcademicCap/> Generasi : 6
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 30 Juni 2001
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : O
                <br/>
                <TbZodiacCancer/> Horoskop : Cancer
                <br/>
                <GiBodyHeight/> Tinggi Badan : 165 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 193 Show

            </Card.Text>
            
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48gita/"><SiInstagram/> jkt48gita</Nav.Link>
            <Nav.Link href="https://twitter.com/A_GitaJKT48/"><GrTwitter/> A_GitaJKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@gitajkt48"><SiTiktok/> @gitajkt48</Nav.Link>
            </Card.Text>
           
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Gita"><RiSlideshow3Line/> Gita/ギタ</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile6