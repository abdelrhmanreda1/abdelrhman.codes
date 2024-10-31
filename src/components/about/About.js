/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import "./About.css";

import profile from "../../assets/profile.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Welcome!";
  const aboutme = `I'm ${FirstName} ${LastName}, a passionate and versatile frontend developer with a strong background in crafting high-performance, user-centric web applications. With a keen eye for design and a deep understanding of modern web technologies, I specialize in creating responsive, accessible, and visually appealing interfaces that elevate user experiences. Let's collaborate to bring your vision to life through innovative web solutions.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div
            className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "drop-shadow(10px 0px 10px rgba(0, 0, 0, 0.6))",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="_content_wrapper">
            <Typography component="h2" variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
            <a href="#contact" className="send-btn">
              <i className="fas fa-terminal"></i>
              <Typography component="span">Get in touch with me</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
