"use client";

import React, { ReactElement, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config.js";

// import { SMTPClient } from 'emailjs';


interface FormState {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

// const client = new SMTPClient({
// 	user: 'hello@mastork.com',
// 	password: 'Mastork@123',
// 	host: 'sparshmoharana@gmail.com',
// 	ssl: true,
// });


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here

    try {
      const docRef = await addDoc(collection(db, "contacFormData"), formData);
      // sendEmail();
    } catch (error) {
      console.log(error)
    }

    // Reset form data after submission if needed
    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });
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
    setFormData({...formData, mobile: info.numberValue})
  };


  /**
   * Send email upon saving field to firebae
   */
  // const sendEmail = async () => {
  //   try {
  //     const message = await client.sendAsync({
  //       text: 'i hope this works',
  //       from: '<tbd>',
  //       to: '<dhruv@mastork.com>,',
  //       subject: 'testing emailjs',
  //     });
  //     console.log(message);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>Request a Demo</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
              <Box
                className= "row"
                sx={{
                  "& .MuiTextField-root": {  my: 1 },
                }}
              >
                <div className="col-md-6">
                <TextField
                  id="indexFormName"
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                <TextField
                  id="indexFormEmail"
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange}
                />
                </div>

                <div className="col-md-6">
                <TextField
                  id="indexFormSubject"
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange}
                />
                </div>

                <div className="col-md-6">
                <MuiTelInput
                  defaultCountry="IN"
                  placeholder="Mobile"
                  value={value}
                  name="mobile"
                  fullWidth
                  required
                  onChange={handlePhoneChange}
                />
                </div>

                <div>
                <TextField
                  id="indexFormCustomMessage"
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  onChange={handleChange}
                />
                </div>
              </Box>
              <Button type="submit" className="mt-2 btn btn-primary" variant="contained" fullWidth>
                  Submit
              </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
