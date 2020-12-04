import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { readTotalUser } from "./../form/api-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "#ededed",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#3f4771",
    },
  },
  submit: {
    textAlign: "center",
    padding: "10px",
    margin: "20px",
    left:'30%'
  },
}));

export default function Home() {
  const classes = useStyles();
  const [totaluser, setTotaluser] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    readTotalUser(signal).then((data) => {
      if (data && data.error) {
      } else {
        setTotaluser(data);
        console.log("total users", data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Home Page
        </Typography>
        <CardContent>
          <Typography type="body1" component="p">
            This is a test app for web developer recruitment. In this app, you
            can fill up a form and get certificate instantly. You can also share
            your certificate to your social app. Please do sign up by clicking
            "Sign Up" button. Thank You!
          </Typography>
          <Divider />
        </CardContent>
        <Link to="/form/new">
          <Button
            color="primary"
            variant="contained"
            className={classes.submit}
          >
            Do Support
          </Button>
        </Link>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" component="p">
            Total Users: {totaluser.total}
          </Typography>
          
          {/* {totaluser.map((item, index) => {
           return(
             <span key={index}>

                {item.name}

             </span>
           ) 
           })} */}

          <Divider />
        </CardContent>
      </Card>
    </>
  );
}
