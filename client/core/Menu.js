import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden'

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#ff4081" };
  else return { color: "#ffffff" };
};
const Menu = withRouter(({ history }) => (
  <>
    <Typography
      variant="h4"
      color="inherit"
      style={{ margin: "20px", paddingLeft: "50px" }}
    >
      MERN CodeBase
    </Typography>

    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          style={{ paddingLeft: "50px" }}
        >
          Home
        </Typography>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon />
          </IconButton>
        </Link>

          <Button style={isActive(history)}>About Us</Button>
          <Button style={isActive(history)}>Career</Button>
        {/* {!auth.isAuthenticated() && (
          <span>
            <Link to="/signup">
              <Button style={isActive(history, "/signup")}>Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive(history, "/signin")}>Sign In</Button>
            </Link>
          </span>
        )} */}
        {/* {auth.isAuthenticated() && (
          <span>
            <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button
                style={isActive(
                  history,
                  "/user/" + auth.isAuthenticated().user._id
                )}
              >
                My Profile
              </Button>
            </Link>
            <Button
              color="inherit"
              onClick={() => {
                auth.clearJWT(() => history.push("/"));
              }}
            >
              Sign out
            </Button>
          </span>
        )}{" "} */}
      </Toolbar>
    </AppBar>
  </>
));

export default Menu;
