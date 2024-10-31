import React, { useState } from "react";
import { Container, Typography, TextField, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "0.5rem",
  },
  loader: {
    marginLeft: "10px",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";

  // Schema validation using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .required("Email is required.")
      .test("is-valid-email", "Email must contain '@' and '.'", (value) => value.includes("@") && value.includes(".")),
    message: Yup.string().required("Message is required."),
  });

  // Loader state
  const [loading, setLoading] = useState(false);

  const sendEmail = (values, { resetForm }) => {
    setLoading(true); // Start the loader

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs.send("service_6aso4co", "template_uk6oov7", templateParams, "yflxRVtifPMLu0NAg").then(
      (result) => {
        console.log(result.text);
        setLoading(false); // Stop the loader
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have sent an email!",
          showConfirmButton: false,
          timer: 1500,
        });
        resetForm();
      },
      (error) => {
        console.log(error.text);
        setLoading(false); // Stop the loader
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    );
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <Formik initialValues={{ name: "", email: "", message: "" }} validationSchema={validationSchema} onSubmit={sendEmail} validateOnBlur={true} validateOnChange={true}>
              {({ isValid, dirty, touched, errors, validateForm, handleSubmit }) => (
                <Form className={classes.form}>
                  <Field as={TextField} id="outlined-name-input" label="Name" type="text" size="small" variant="filled" name="name" className={classes.formfield} error={touched.name && !!errors.name} helperText={touched.name && errors.name ? <ErrorMessage name="name" component="span" className={classes.error} /> : null} />
                  <Field as={TextField} id="outlined-email-input" label="Email" type="email" size="small" variant="filled" name="email" className={classes.formfield} error={touched.email && !!errors.email} helperText={touched.email && errors.email ? <ErrorMessage name="email" component="span" className={classes.error} /> : null} />
                  <Field as={TextField} id="outlined-message-input" label="Message" type="textarea" size="small" multiline minRows={5} variant="filled" name="message" className={classes.formfield} error={touched.message && !!errors.message} helperText={touched.message && errors.message ? <ErrorMessage name="message" component="span" className={classes.error} /> : null} />
                  <button
                    type="button"
                    className="submit-btn"
                    disabled={loading} // Disable button during loading
                    onClick={() => {
                      validateForm().then(() => {
                        handleSubmit(); // Run submit if the form is valid
                      });
                    }}
                  >
                    {loading ? (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography component="span"> Sending...</Typography>
                        <CircularProgress size={20} className={classes.loader} />
                      </div>
                    ) : (
                      <>
                        <i className="fas fa-terminal"></i>
                        <Typography component="span"> Send Message</Typography>
                      </>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <h5 className="contact_msg">I'd love to hear from you! Share your thoughts or ask me anything.</h5>
        </div>
      </Container>
    </section>
  );
};
