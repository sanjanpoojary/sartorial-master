import { Box, Typography } from "@mui/material";
import hero from "/images/products/hero.jpg";
import Mycarousel from "./Carousel";
import Topreviews from "./topreviews";
import Webflow from "./webflow";
import herowoman from "/images/products/herowoman.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const card = {
    textDecoration: "none",
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: { xs: "100vw", md: "100vw", lg: "100%" },
          height: { xs: 380, lg: 500 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: { xs: "center", sm: "center" },
            alignItems: "center",
            textAlign: { xs: "center", sm: "center" },
            margin: "20px",
          }}
        >
          <img
            src={herowoman}
            alt="hero-G"
            width="300px"
            height="350px"
            className="hero-woman"
          />
          <Box
            sx={{
              padding: { xs: "5px", lg: "20px" },
              margin: { xs: "5px 25px", lg: "20px" },
            }}
          >
            {/* <Typography
              variant="h4"
              align="left"
              color="white"
              sx={{ fontSize: { xs: '20px', lg: '30px' } }}
            >
              Lorem ipsum dolor sit amet
            </Typography> */}
            <Typography
              variant="body1"
              align="left"
              color="#FFFFF0"
              sx={{ 
                fontSize: { xs: "20px" },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" 
              }}
            >
              Unleash your unique style with bespoke tailoring from Dubai's
              finest. Our Sartorial Master, with over 35 years of experience
              honed in prestigious fashion houses crafting defense suits and
              more, hand-tailors garments that transcend clothing. We combine
              meticulous craftsmanship with top-notch Italian fabrics to create
              a perfect fit and luxurious feel, all at a competitive price.
              Unlike Savile Row, bespoke brilliance doesn't have to break the
              bank.
            </Typography>
            <br />
            <Typography
              variant="body1"
              align="left"
              color="#FFFFF0"
              sx={{ 
                fontSize: { xs: "20px" },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" 
              }}
            >
              Look sharp and feel confident, knowing you're also supporting a
              worthy cause. Invest in yourself, invest in others. 1% to
              patients. Elevate your wardrobe and sartorial experience with us
              today.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: { xs: "20px", lg: "40px" },
          textAlign: "center",
          height: { xs: 800, sm: 600, md: 450 },
        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: "30px", sm: "35px" } }}>
          {" "}
          How We Work{" "}
        </Typography>
        <Webflow />
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: { xs: "10px auto", lg: "10px auto" },
          marginTop: { xs: "120px", md: "200px" },
          padding: "15px 30px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundImage:
            "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)",
        }}
      >
        <Typography variant="h6" sx={{ marginY: "10px" }}>
          {" "}
          Estimated Order Delivery time{" "}
        </Typography>
        <ul>
          <li> Estimated Standard Delivery - 22 days </li>
          <li> Estimated Express Delivery - 13 days </li>
          <li>
            {" "}
            Please expect a delay of approximately 3 days due to any unavoidable
            conditions.{" "}
          </li>
        </ul>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: { xs: "40px", md: "100px", lg: "20px" },
          padding: { xs: "60px 0px", md: "30px 0px", lg: "40px 0px" },
        }}
      >
        <Link to="catalog" style={card}>
          <Box
            sx={{
              width: { xs: 150, sm: "280px", md: "300px", lg: "350px" },
              textAlign: "center",
              padding: { xs: "15px 20px", sm: "40px 35px", md: "20px 50px" },
              borderRadius: { xs: 4, sm: 10, lg: "15px" },
              backgroundImage:
                "linear-gradient(to right, #434343 0%, black 100%)",
              color: "white",
              margin: "3px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px", md: "22px", lg: "25px" },
              }}
            >
              {" "}
              New Stitching{" "}
            </Typography>
          </Box>
        </Link>
        {/* <Link to="alteration" style={card}>
          <Box
            sx={{
              width: { xs: 150, sm: 200, md: '300px', lg: '350px' },
              textAlign: 'center',
              padding: { xs: '15px 20px', sm: '40px 35px', md: '20px 50px' },
              borderRadius: { xs: 4, sm: 10, lg: '15px' },
              backgroundImage:
                'linear-gradient(to right, #434343 0%, black 100%)',
              color: 'white',
              margin: '3px',
              textDecoration: 'none',
            }}
          >
            <Typography sx={{ fontSize: { xs: '15px', sm: '30px' } }}>
              {' '}
              Alteration{' '}
            </Typography>
          </Box>
        </Link> */}
        <Link to="homegallery" style={card}>
          <Box
            sx={{
              width: { xs: 150, sm: "280px", md: "300px", lg: "350px" },
              textAlign: "center",
              padding: { xs: "15px 20px", sm: "40px 35px", md: "20px 50px" },
              borderRadius: { xs: 4, sm: 10, lg: "15px" },
              backgroundImage:
                "linear-gradient(to right, #434343 0%, black 100%)",
              color: "white",
              margin: "3px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px", md: "22px", lg: "25px" },
              }}
            >
              {" "}
              Gallery{" "}
            </Typography>
          </Box>
        </Link>
      </Box>

      <Box
        sx={{
          width: { xs: "80%", sm: "80%", md: "80%", lg: "80%" },
          margin: "auto",
          height: { lg: "100vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { lg: "center" },
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ margin: "20px 0px", fontSize: { xs: "30px", sm: "35px" } }}
        >
          {" "}
          Suits That Defines You
        </Typography>
        <Mycarousel />
      </Box>

      <Box
        sx={{
          textAlign: { xs: "center" },
          justifyContent: "center",
          margin: { xs: "30px 30px", lg: "40px 60px" },
        }}
      >
        <Typography
          variant="h5"
          sx={{ margin: "20px 0px", fontSize: { xs: "30px", sm: "35px" } }}
        >
          {" "}
          Reviews{" "}
        </Typography>
        <Typography
          variant="body1"
          color="red"
          sx={{
            margin: "20px 0px",
            fontSize: { xs: "15px", sm: "20px", md: "22px", lg: "28px" },
          }}
        >
          {" "}
          Coming Soon....{" "}
        </Typography>
        <Topreviews />
      </Box>
    </Box>
  );
};
export default HomePage;
