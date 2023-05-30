import Carousal from "./Components/Pages/Home/Carousal";
import FeaturedProducts from "./Components/Pages/Home/FeaturedProducts";
import { Helmet } from "react-helmet";
import FavTabs from "./Components/Pages/Home/FavTabs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import g1 from './assets/g1.avif'
import g2 from './assets/g2.avif'
import g3 from './assets/g3.avif'
import g4 from './assets/g4.avif'
import g5 from './assets/g5.avif'
import g6 from './assets/g6.avif'
import g7 from './assets/g7.avif'
import g8 from './assets/g8.avif'
import bannerEx from './assets/bannerex.avif'
import text from './assets/050423-home-story-all-dolls-headline.png'

function Home() {
  const [gallery, setGallery] = useState([]);
  //useEffect
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("../public/data.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, "400i"],
          },
          {
            font: "Playfair Display",
            weights: [400, 700],
          },
        ]}
      />
      <Helmet>
        <title>KIDOO \ home</title>
      </Helmet>
      <header className="mb-20">
        <Carousal />
      </header>
      <section data-aos="fade-left" className="pb-20 ">
        <div data-aos="fade-left">
          <h1
            style={{ fontFamily: "Playfair Display" }}
            className="lg:text-6xl text-4xl  font-bold text-[#BC0A4D] text-center pb-20"
          >
            Featured dolls
          </h1>
        </div>
        <FeaturedProducts />
      </section>
      <section>
        <div data-aos="zoom-in-up" className="flex flex-col items-center">
          <div
            style={{ fontFamily: "Playfair Display" }}
            className=" text-4xl lg:text-6xl font-bold text-[#BC0A4D] py-10 "
          >
            <h1>Most Popular</h1>
          </div>
          <div className="my-10">
            <FavTabs />
          </div>
        </div>
      </section>
      
      <section className="my-10">
        <div data-aos="zoom-in-up" className="flex lg:flex-row  items-center ">
          <div><img src={bannerEx} alt="" /></div>
          <div className="text-center">
            <div><img src={text} alt="" /></div>
            <p className="px-10">The latest additions bringing American history to life</p>

          </div>

        </div>
      </section>

      <section className="my-20">
        <div className="text-center mb-10">
          <h1
            style={{ fontFamily: "Playfair Display" }}
            className=" text-4xl lg:text-6xl font-bold text-[#BC0A4D] py-10"
          >
            Dolls for every age and stage
          </h1>
        </div>
        <div className="grid lg:grid-cols-2  gap-10  ">
          {/* {gallery.map((photo) => (
            <img data-aos="zoom-in-up" src={photo.image} alt="photo" />
          ))} */}
          
            <img data-aos="zoom-in-up" src={g1} alt="" />
            <img data-aos="zoom-in-up" src={g2} alt="" />
            <img data-aos="zoom-in-up" src={g3} alt="" />
            <img data-aos="zoom-in-up" src={g4} alt="" />
            <img data-aos="zoom-in-up" src={g5} alt="" />
            <img data-aos="zoom-in-up" src={g6} alt="" />
            <img data-aos="zoom-in-up" src={g7} alt="" />
            <img data-aos="zoom-in-up" src={g8} alt="" />
          
        </div>
      </section>
      
    </>
  );
}

export default Home;
