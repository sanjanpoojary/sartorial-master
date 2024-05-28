import { useState } from 'react';
import './carousel.css';
import { ArrowCircleRight, ArrowCircleLeft } from '@mui/icons-material';
import img1 from '/images/AdImages/img1.jpeg';
import img2 from '/images/AdImages/img2.jpeg';
import img3 from '/images/AdImages/img3.jpeg';
import img8 from '/images/AdImages/img8.jpeg';

const items = [
    {
      image: img1,
      title: 'Slide 1',
      // 'https://img.flexifunnels.com/images/14802/q2mji_1280_pexelssandeepsingh11210194.jpg'
    },
    {
      image: img2,
      title: 'Slide 2',
      // 'https://img.flexifunnels.com/images/14802/y2mtu_1280_couple80193701280.jpg'
    },
    {
      image: img3,
      title: 'Slide 3',
      // 'https://img.flexifunnels.com/images/14802/a3mjk_640_pexelsminervastudio2897883.jpg'
    },
    {
      image: img8 ,
      title: 'Slide 4',
      // 'https://img.flexifunnels.com/images/14802/m3nta_1279_pexelsnatankarnushin9541177.jpg '
    },
];

const Mycarousel = () => {

  const [slide, setSlide] = useState(0);

  const nextSlide = () =>{
    setSlide(slide === items.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () =>{
    setSlide(slide === 0 ? items.length - 1 : slide -1);
  }

  return (
    <div className="carousel">
      <ArrowCircleLeft className='arrow arrow-left' onClick={prevSlide} />
      {
        items.map((item, index)=>{
          return(
            <img src={item.image} alt="slide"  key={index} className={slide === index ? "slide" : "slide-hidden"} />
          );
        })
      }
      <ArrowCircleRight className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {
          items.map((_, index)=>{
            return(
              <button key={index} onClick={()=> setSlide(index)} 
              className={slide === index ? "indicator" : "indicator-inactive"} >
              </button>
            );
          })
        }
      </span>
    </div>
  )
}

export default Mycarousel;