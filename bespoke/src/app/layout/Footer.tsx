import { Box, Container, Typography } from "@mui/material";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

const Myfooter = () => {
  const termsStyle = {
    textDecoration: "none",
    color: "lightBlue",
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 100,
        width: "100%",
        // height: "50vh",
      }}
    >
      {/* <Box
        sx={{
          backgroundColor: "#232323",
          padding: "20px 20px",
          color: "white",
          textAlign: "center",
        }}
      > */}
      {/* <Box sx={{ textAlign: "left" }}>
          <Typography variant='body1' > follow us : </Typography>
          <Typography variant='body2' sx={{ display: "flex", alignItems: "center", margin: "5px 5px" }}>
            <FacebookIcon /> Facebook
          </Typography>
          <Typography variant='body2' sx={{ display: "flex", alignItems: "center", margin: "5px 5px" }}>
            <XIcon /> Twitter
          </Typography>
          <Typography variant='body2' sx={{ display: "flex", alignItems: "center", margin: "5px 5px" }}>
            <InstagramIcon /> Instagram
          </Typography>
        </Box> */}
      {/* Contact us: support@talossolutionsllc.com&nbsp;&nbsp;&nbsp;
        <Link to="/termsandconditions" style={{ color: "#f5f5f5" }}>
          {" "}
          Terms And Conditions{" "}
        </Link>
      </Box> */}
      <Box
        sx={{
          backgroundColor: "Black",
          textAlign: "center",
          padding: "10px 10px",
          color: "white",
        }}
      >
        {/* <Typography variant="body2">
          {" "}
          © 2024 Sartorial Master. All Rights Reserved Contact us:
          support@talossolutionsllc.com&nbsp;&nbsp;&nbsp;
          <Link to="/termsandconditions" style={{ color: "#f5f5f5" }}>
            {" "}
            Terms And Conditions{" "}
          </Link>
        </Typography> */}

        <Container maxWidth="md">
          <Typography variant="body1">
            © {new Date().getFullYear()} Sartorial Master. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography variant="body2" marginRight="20px">
              Contact Us : support@talossolutionsllc.com
            </Typography>
            <Link to="/termsandconditions" style={termsStyle}>
              <Typography variant="body2">Terms and Conditions</Typography>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Myfooter;
