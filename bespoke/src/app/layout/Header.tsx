import React, { useState, useEffect } from "react";
import { ExitToApp, ShoppingCart } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  // Switch,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Sarlogo from "/images/products/Sarlogo.jpeg";
// import { useAppSelector } from '../store/ConfigureStore';
// import SignedInUserMenu from './SignedInUserMenu';

const midLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

// const rightLinks = [
//   // { title: 'Login', path: '/login' },
//   // { title: 'Register', path: '/register' },
// ];
// interface Props {
//   darkMode: boolean;
//   handleChangeMode: () => void;
// }

const navStyles = {
  display: { xs: "none", md: "flex" },
  color: "white",
  textDecoration: "none",
  // typography: 'h5',
  "&:hover": {
    color: "grey.400",
  },
  "&.active": {
    color: "dark",
  },
};

const navstyles2 = {
  display: { xs: "flex", md: "none" },
  color: "white",
  textDecoration: "none",
  // typography: 'h6',
  "&:hover": {
    color: "grey.400",
  },
  "&.active": {
    color: "dark",
  },
};

const cartIcon = {
  color: "inherit",
  "&:hover": {
    color: "grey.400",
  },
  "&.active": {
    color: "dark",
  },
};

const drawstyles = {
  display: { xs: "flex", md: "none" },
  color: "white",
  textDecoration: "none",
  "&:hover": {
    color: "grey.400",
  },
  "&.active": {
    color: "dark",
  },
};

export default function Header() {
  // const { basket } = useAppSelector((state) => state.basket);
  // // const { basket } = useStoreContext();
  // const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
  // const { user } = useAppSelector((state) => state.account);

  const [open, setOpen] = React.useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const badgeCount = () => {
    fetch("http://localhost:6451/cartlist")
      .then((res) => res.json())
      .then((allItems) => {
        const count = allItems.length;
        setCartItemCount(count);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin");
    setIsAdmin(!!(token && isAdmin));
    badgeCount();
  }, [location.pathname]);
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, height: "100vh", background: "black" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Typography variant="h6" component={NavLink} to="/" sx={drawstyles}>
            Home
          </Typography>
        </ListItem>
        {midLinks.map(({ title, path }) => (
          <ListItem component={NavLink} to={path} key={path} sx={drawstyles}>
            <Typography variant="h6">{title}</Typography>
          </ListItem>
        ))}
      </List>
      <IconButton
        component={Link}
        to="/basket"
        size="small"
        edge="start"
        color="inherit"
        sx={{ ml: "12px" }}
      >
        <Badge badgeContent={cartItemCount}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Cart
          </Typography>
        </Badge>
      </IconButton>

      {/* <List>
        {rightLinks.map(({ title, path }) => (
          <ListItem component={NavLink} to={path} key={path} sx={drawstyles}>
            <Typography variant="h6">{title}</Typography>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ mb: 0, backgroundColor: "black" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
          <img
            src={Sarlogo}
            alt="bb-logo"
            height="50px"
            width="50px"
            className="bb-logo"
          />

          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              ...navStyles,
              // fontFamily: "'Dancing Script', cursive",
              fontOpticalSizing: "auto",
              fontWeight: "400",
              fontStyle: "normal",
            }}
          >
            Sartorial Master
          </Typography>
        </IconButton>

        <List
          sx={{ display: { xs: "none", md: "flex" }, marginRight: "100px" }}
        >
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              <Typography variant="body1">{title.toUpperCase()}</Typography>
            </ListItem>
          ))}
        </List>

        <Box
          display="flex"
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {/* <Switch
            checked={darkMode}
            onChange={handleChangeMode}
            size="small"
            sx={{ margin: "0px 20px" }}
          /> */}

          <IconButton
            component={Link}
            to="/basket"
            size="small"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={cartItemCount} color="secondary">
              <ShoppingCart sx={cartIcon} />
            </Badge>
          </IconButton>
          {isAdmin && location.pathname.startsWith("/catalog") && (
            <IconButton color="inherit" onClick={handleSignOut}>
              {/* Sign Out */}
              <ExitToApp />
            </IconButton>
          )}
          {/* {user ? (s
            <SignedInUserMenu />
          ) : 
          (
            <List sx={{ display: 'flex' }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  <Typography variant="h6">{title.toUpperCase()}</Typography>
                </ListItem>
              ))}
            </List>
          )
          } */}
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: { xs: "center", sm: "center" },
            alignItems: "cenetr",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              marginLeft: { xs: "45px", sm: "220px" },
            }}
          >
            <img
              src={Sarlogo}
              alt="bb-logo"
              height="28px"
              width="28px"
              className="bb-logo"
            />
            <Typography
              variant="h5"
              component={NavLink}
              to="/"
              sx={{
                ...navstyles2,
                // fontFamily: "'Dancing Script', cursive",
                fontOpticalSizing: "auto",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              Sartorial Master
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
