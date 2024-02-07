import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img_1.jpg";
import img2 from "../../assets/img_2.jpg";
import img3 from "../../assets/img_3.jpg";
import img4 from "../../assets/img_4.jpg";
import img5 from "../../assets/img_5.jpg";
import img6 from "../../assets/img_6.jpg";
import img7 from "../../assets/img_7.jpg";

const Banner = () => {
  return (
   <>
   <Carousel fade>
   <Carousel.Item>
     <img src={img1} className="img-fluid img_custom" />
   </Carousel.Item>
   <Carousel.Item>
     <img src={img2} className="img-fluid img_custom" />
   </Carousel.Item>
   <Carousel.Item>
     <img src={img3} className="img-fluid img_custom" />
   </Carousel.Item>
   <Carousel.Item>
     <img src={img4} className="img-fluid img_custom" />
   </Carousel.Item>
   <Carousel.Item>
     <img src={img5} className="img-fluid img_custom" />
   </Carousel.Item>
   <Carousel.Item>
     <img src={img6} className="img-fluid img_custom" />
   </Carousel.Item>
   <Carousel.Item>
     <img src={img7} className="img-fluid img_custom" />
   </Carousel.Item>
 </Carousel>
   </>
  );
};

export default Banner;
