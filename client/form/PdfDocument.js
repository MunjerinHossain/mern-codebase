import React, { useState, useEffect } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { makeStyles } from "@material-ui/core/styles";
import { readLastUser } from "./api-form.js";

const useStyles = makeStyles((theme) => ({
  page: {
    // flexDirection: "row",
    backgroundColor: "#E4E4E4",
    maxWidth: "800px",
  },
  section: {
    margin: "1000px",
    padding: "1000px",
    flexGrow: 1,
  },
  root: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
}));

// Create Document Component

export default function Doc() {
  const classes = useStyles();
  const [form, setForm] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    readLastUser(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log("data certificate", data);
        setForm(data);
        console.log("data after certificate", data);
      }
    });
  }, []);

  return (
    <>
      {form.map((item, i) => {
        return (
          <span key={i}>
            <Document pdf={item.name}>
              <Page size="A4" className={classes.page}>
                <View className={classes.section}>
                  <Text>sdsd</Text>
                </View>
              </Page>
            </Document>
          </span>
        );
      })}
      <Document>
        <Page size="A4" className={classes.page}>

          <View className={classes.section}>
            <Text>Thank you for signing up.</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}
