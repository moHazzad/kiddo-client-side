import hero1 from '../../../assets/hero 1.avif'
import hero2 from '../../../assets/hero2.avif'
import hero3 from '../../../assets/hero3.avif'
import hero4 from '../../../assets/hero4.avif'
import LazyLoad from 'react-lazy-load';


function Carousal() {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <LazyLoad>

    <img src={hero1} className="w-full" />
    </LazyLoad>
    {/* <div className='w-full' style={{ backgroundImage: `url(${hero2})`,backgroundPosition:"center", backgroundSize:"cover" }}> */}

    {/* </div> */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-transparent">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <LazyLoad>

    <img src={hero2} className="w-full" />
    </LazyLoad>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-transparent">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <LazyLoad>


    <img src={hero3} className="w-full" />
    </LazyLoad>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-transparent">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <LazyLoad>

    <img src={hero4} className="w-full" />
    </LazyLoad>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-transparent">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div>
</div>
  )
}

export default Carousal