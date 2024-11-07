"use client";

import React, { ReactElement, useState } from "react";
import { Box, TextField, Button, Snackbar } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config.js";

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

/**
 * Form data interface
 */
interface FormState {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const ContactForm: React.FC = () => {
  /**
   * State managers for snackbar
   */
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState("Detials saved")

  /**
   * Snackbar Handler
   */
  const handleSnackbarClick = () => {
    setSnackbarOpen(true);
  };

  /**
   * Snackbar Handler
   */
  const handleSnackbarClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  /**
   * Form data state management
   */
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  /**
   * Variables for Email validation
   * State manager for email error
   * Email regex
   */
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,}$/i;

  /**
   * To handle changes made to input fields
   * @param e : React change event
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if(name === "email"){
      setEmailError(!emailRegex.test(value));
    }

    setFormData({ ...formData, [name]: value });
  };

  /**
   * To handle form submission
   * @param e : React form event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSnackbarText("Details saved")

    if(emailError === true) {
      setSnackbarText("Please enter a valid email")
      handleSnackbarClick()
      return;
    }

    // Handle form submission logic here
    try {
      const docRef = await addDoc(collection(db, "contactFormData"), formData);
      sendEmail(formData);
      handleSnackbarClick()
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      setValue("") //Set country value to null after form submission  
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Country selector for country input field
   */
  const [value, setValue] = useState("");

  /**
   * To change the selcted country to user specific country
   * @param {*} newValue: Expects a country value
   */
  const handlePhoneChange = (newValue: any, info: any) => {
    setValue(newValue);
    setFormData({ ...formData, mobile: info.numberValue });
  };

  /**
   * 
   * @param data 
   * @returns 
   */
  const sendEmail = async (data: FormState) => {
    const templateParams = {
      to_name: 'Dhruv',
      from_name: data.name,
      phone: data.mobile,
      email: data.email,
      message: data.message,
    };
    try {
      await emailjs.send(
        'service_a7pbx6r',
        'template_k68ov4x',
        templateParams,
        {
          publicKey: "AwLUmb8Sw38zwFiTl"
        },
      );
    } 
    catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
      console.log("Error ", err)
    }
  }

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>Request a Demo</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <Box
              sx={{
                "& .MuiTextField-root": { my: 1 },
              }}
            >
                <TextField
                  id="indexFormName"
                  label="Name"
                  name="name"
                  value={formData["name"]}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange}
                />

                <TextField
                  id="indexFormEmail"
                  label="Email"
                  name="email"
                  value={formData["email"]}
                  variant="outlined"
                  fullWidth
                  required
                  error={emailError}
                  onChange={handleChange}
                />

                <MuiTelInput
                  defaultCountry="IN"
                  placeholder="Mobile"
                  value={value}
                  name="mobile"
                  fullWidth
                  required
                  onChange={handlePhoneChange}
                />

                <TextField
                  label="Message"
                  name="message"
                  value={formData["message"]}
                  multiline
                  rows={4}
                  fullWidth
                  required
                  onChange={handleChange}
                />

              <Button
                type="submit"
                className="mt-1 mb-2 btn btn-primary"
                variant="contained"
                >
                Submit
              </Button>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarText}
                />
            </Box>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
