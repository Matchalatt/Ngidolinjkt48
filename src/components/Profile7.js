import {Card, Container, Image, Row, Col, Nav, Button} from "react-bootstrap"
import "../style/LandingPage.css"
import c7 from "../assests/jkt48music/c7.jpg"
import {HiOutlineIdentification} from "react-icons/hi";
import {FaBirthdayCake} from 'react-icons/fa'
import { MdOutlineBloodtype } from "react-icons/md"
import {TbZodiacAquarius, TbZodiacVirgo} from "react-icons/tb"
import {GiBodyHeight} from "react-icons/gi"
import {RiSlideshow3Line} from "react-icons/ri"
import {HiAcademicCap} from "react-icons/hi2"
import {SiInstagram} from "react-icons/si"
import {GrTwitter} from "react-icons/gr"
import {SiTiktok} from "react-icons/si"

const Profile7 = () => {
    return (
        <div className="Profile7">
            <br/>
            <div className="judul"><h1>Member JKT48</h1></div>
           <Container>
            <Row>
                <Col md={4}>
                <br/>
                <Card>
                <Image variant="top" src={c7} className="fImage1"/>
                </Card>
     
                </Col>
               
                <Col md={4}>
                <br/>
                <Card className="fImage">
       
        <Card.Body>
            <Card.Text className="textfiony">"Senyumku terekam jelas dalam ingatanmu seperti foto dalam sejuta warna
            . Nama aku Gracia always smile, sekali lagi... GRACIA !!!"</Card.Text>
            <Card.Title className="text-left textfiony">Biodata Member :</Card.Title>
            
            <Card.Text className="textfiony">
                <HiOutlineIdentification/> Nama : Shania Gracia
                <br/>
                <HiAcademicCap/> Generasi : 3
                <br/>
                <FaBirthdayCake/> Tanggal Lahir : 31 Agustus 1999
                <br/>
                <MdOutlineBloodtype/> Golongan Darah : A
                <br/>
                <TbZodiacVirgo/> Horoskop : Virgo
                <br/>
                <GiBodyHeight/> Tinggi Badan : 161 cm
                <br/>
                <RiSlideshow3Line/> Showroom : 656 Show

            </Card.Text>
            
            <Card.Title className="text-left textfiony">Media Sosial :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.instagram.com/jkt48gracia/"><SiInstagram/> jkt48gracia</Nav.Link>
            <Nav.Link href="https://twitter.com/S_GraciaJKT48/"><GrTwitter/> S_GraciaJKT48</Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@graciajkt48"><SiTiktok/> @graciajkt48</Nav.Link>
            </Card.Text>
            
            <Card.Title className="textfiony">Showroom Member :</Card.Title>
            <Card.Text className="textfiony">
            <Nav.Link href="https://www.showroom-live.com/r/JKT48_Gracia"><RiSlideshow3Line/> Gracia/グラシア</Nav.Link>
            </Card.Text>
            
            
         
        </Card.Body>
      </Card>
                </Col>
            </Row>
           </Container>
     
        </div>
    )
    
}

export default Profile7