// import MyComponent from "../components/MyComponent";
import image1 from "../../../assets/f1.avif";
import image2 from "../../../assets/f2.avif";
import image3 from "../../../assets/f3.avif";
import image4 from "../../../assets/f4.avif";
import image5 from "../../../assets/f5.avif";
import image6 from "../../../assets/f6.avif";
import Marquee from "react-fast-marquee";

function FeaturedProducts() {
  return (
    <Marquee pauseOnHover speed={100} className="cursor-pointer  ">
      
        <div>
          <img className="w-44 lg:w-full" src={image1} alt="" />
        </div>
        <div>
          <img className="w-44 lg:w-full" src={image2} alt="" />
        </div>
        <div>
          <img className="w-44 lg:w-full" src={image3} alt="" />
        </div>
        <div>
          <img className="w-44 lg:w-full" src={image4} alt="" />
        </div>
        <div>
          <img className="w-44 lg:w-full" src={image5} alt="" />
        </div>
        <div>
          <img className="w-44 lg:w-full" src={image6} alt="" />
        </div>
      
    </Marquee>
  );
}

export default FeaturedProducts;
