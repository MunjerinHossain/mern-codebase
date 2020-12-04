import React, { props } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  facebookShare: {
    color: "#4167b2",
    "&$checked": {
      color: "#4167b2",
    },
  },

  twitterShare: {
    color: "#1da1f3",
    "&$checked": {
      color: "#1da1f3",
    },
  },
  button: {
    display: "flex",
    margin: "auto",
    marginBottom: "20px",
    width: "159px",
    marginTop:'30px'
  },
  text:{
      fontSize:'15px',
    //   margin:'auto'
  }
}));

export default function Share(props) {
  const classes = useStyles();

  return (
    <>
      <FacebookShareButton
        url={"http://localhost:3000/form"}
        quote={"MERN Skill Certificate"}
        hashtag="#MernSkill"
        className={classes.button}
      >
        <Typography className={classes.text}>Share to:</Typography>
        <FacebookIcon size={36} className={classes.facebookShare} />
      </FacebookShareButton>
    </>
  );
}
