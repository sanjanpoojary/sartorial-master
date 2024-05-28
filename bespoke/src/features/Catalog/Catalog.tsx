import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function Catalog() {
  const submenustyles = {
    textDecoration: "none",
    color: "black",
  };
  const isAdminLoggedIn =
    localStorage.getItem("token") && localStorage.getItem("isAdmin") === "true";
  return (
    <div>
      <Box>
        <Box
          sx={{
            position: "fixed",
            top: 60,
            width: "100vw",
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "#bcbaba",
            paddingY: "8px",
          }}
        >
          <Link to="" style={submenustyles}>
            {" "}
            Mens{" "}
          </Link>
          {/* <Link to="womenscatagory" style={submenustyles}>
            {' '}
            Womens{' '}
          </Link>
          <Link to="boyscatagory" style={submenustyles}>
            {' '}
            Boys{' '}
          </Link>
          <Link to="girlscatagory" style={submenustyles}>
            {' '}
            Girls{' '}
          </Link> */}
          {isAdminLoggedIn && (
            <Link to="Dashboard" style={submenustyles}>
              {" "}
              Dashboard{" "}
            </Link>
          )}
        </Box>
        <Box
          sx={{
            width: "90vw",
            marginX: "auto",
            marginY: "90px",
            textAlign: "center",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}
