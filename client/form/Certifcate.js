import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Person from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { readAllForm, read } from "./api-form.js";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  //   root: theme.mixins.gutters({
  //     padding: theme.spacing(1),
  //     margin: theme.spacing(5),
  //   }),
  //   title: {
  //     margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
  //     color: theme.palette.openTitle,
  //   },
  root: {
    flexGrow: 1,
    margin: "50px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text:{
      textAlign:'center',
      marginBottom:'10px',
  },
  textBody:{
    textAlign:'center',
    margin:'10px',
    fontWeight:'bold'
},
textLast:{
    textAlign:'center',
    margin:'10px',
    fontWeight:'bold',
    color:'red',
    marginTop:'25px'
}
}));

export default function Certificates({ match }) {
  const classes = useStyles();
  const [form, setForm] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    readAllForm(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log("data all", data);
        setForm(data);
      }
    });

    read(
      {
        formId: match.params.formId,
      },
      signal
    ).then((data) => {
      if (data && data.error) {
        // setRedirectToSignin(true);
      } else {
        console.log("read one", data);
        setForm(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.formId]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.text}>
          MERN Codebase
        </Typography>
        <Divider/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6" className={classes.textBody}>
                  {form.name}
                </Typography>
                <Typography className={classes.text}>
                  Thank you for siging up and support us! We really appriciate your contribution.
                </Typography>
                <Typography className={classes.textLast}>
                 Your contribution will save someone's life.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
