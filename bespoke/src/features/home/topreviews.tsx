import './carousel.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blankProfilePic from '/images/blanckProfilePic.png'

const users = [
  {
    image: blankProfilePic,
    name: 'Review 1',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum quia soluta id. Explicabo, quidem.'
  },
  {
    image: blankProfilePic,
    name: 'Review 2',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum quia soluta id. Explicabo, quidem.'
  },
  {
    image: blankProfilePic,
    name: 'Review 3',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum quia soluta id. Explicabo, quidem.'
  },
  {
    image: blankProfilePic,
    name: 'Review 4',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum quia soluta id. Explicabo, quidem.'
  },
  {
    image: blankProfilePic,
    name: 'Review 5',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum quia soluta id. Explicabo, quidem.'
  },
  {
    image: blankProfilePic,
    name: 'Review 6',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum quia soluta id. Explicabo, quidem.'
  },
  {
    image: blankProfilePic,
    name: 'Review 7',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum quia soluta id. Explicabo, quidem.'
  },
  {
    image: blankProfilePic,
    name: 'Review 8',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum quia soluta id. Explicabo, quidem.'
  },
];

const Topreviews = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed:6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 6000,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        speed: 6000,
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        speed: 6000,
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="rvw-carousel">
      <Slider {...settings}>
        {
          users.map((user, index) => {
            return (
              <Card sx={{ maxWidth: 220, maxHeight: 300 }} key={index} className="rvw-card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={user.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.review}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default Topreviews;
