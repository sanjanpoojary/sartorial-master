import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const cardStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <Box sx={{ alignContent: "center" }}>
      <Typography variant="h4"> Dashboard </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "85%",
          margin: "auto",
        }}
      >
        {/* <Link to="../userlist" style={cardStyle}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "20px",
              width: "250px",
              paddingY: "60px",
              alignItems: "center",
              margin: "10px",
              backgroundImage:
                "linear-gradient(to bottom, #d7d2cc 0%, #304352 100%)",
            }}
          >
            <Typography variant="h6"> Customers </Typography>
          </Box>
        </Link> */}
        <Link to="../orderlist" style={cardStyle}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "20px",
              width: "250px",
              paddingY: "60px",
              alignItems: "center",
              margin: "10px",
              backgroundImage:
                "linear-gradient(to bottom, #d7d2cc 0%, #304352 100%)",
            }}
          >
            <Typography variant="h6"> Orders </Typography>
          </Box>
        </Link>
        <Link to="../gallery" style={cardStyle}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "20px",
              width: "250px",
              paddingY: "60px",
              alignItems: "center",
              margin: "10px",
              backgroundImage:
                "linear-gradient(to bottom, #d7d2cc 0%, #304352 100%)",
            }}
          >
            <Typography variant="h6"> Gallery </Typography>
          </Box>
        </Link>
        <Link to="../addfabric" style={cardStyle}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "20px",
              width: "250px",
              paddingY: "60px",
              alignItems: "center",
              margin: "10px",
              backgroundImage:
                "linear-gradient(to bottom, #d7d2cc 0%, #304352 100%)",
            }}
          >
            <Typography variant="h6"> Fabric </Typography>
          </Box>
        </Link>
        <Link to="../updateitems" style={cardStyle}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "20px",
              width: "250px",
              paddingY: "60px",
              alignItems: "center",
              margin: "10px",
              backgroundImage:
                "linear-gradient(to bottom, #d7d2cc 0%, #304352 100%)",
            }}
          >
            <Typography variant="h6"> Update Item </Typography>
          </Box>
        </Link>
        <Link to="../updatecharges" style={cardStyle}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "20px",
              width: "250px",
              paddingY: "60px",
              alignItems: "center",
              margin: "10px",
              backgroundImage:
                "linear-gradient(to bottom, #d7d2cc 0%, #304352 100%)",
            }}
          >
            <Typography variant="h6"> Service Charges </Typography>
          </Box>
        </Link>
        {/* <Link to='../orderedit' style={cardStyle}>
                    <Box
                        sx={{
                            border: "1px solid black",
                            borderRadius: "20px",
                            width: "250px",
                            paddingY: "60px",
                            alignItems: "center",
                            margin: "10px",
                            backgroundImage: 'linear-gradient(to bottom, #d7d2cc 0%, #304352 100%)'
                        }}
                    >
                        <Typography variant="h6"> Order Management </Typography>
                    </Box>
                </Link> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
