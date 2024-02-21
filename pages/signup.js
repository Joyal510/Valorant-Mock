import React from "react";
import Image from "next/image";
import "../src/app/signup.css";
import valoJett from "../public/images/valoJett.jpg";
import valorantlogo from "../public/images/valorantlogo.png";
import { MoveRight } from "lucide-react";
import { useState } from "react";

function signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, res) => {
    e.preventDefault();
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data successfully sent to server");
        console.log(formData);
        // console.log(formData);
        // window.location.href = "/login";
      } else {
        console.error("Failed to submit form data to server");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }

    // const data = formData
    // console.log(data);
  };

  return (
    <>
      <div className="sign-up">
        <div className="valojett">
          <Image className="valojett-image" src={valoJett} />
        </div>
        <form
          onSubmit={handleSubmit}
          id="myForm"
          action="/signup"
          method="post"
        >
          <div className="signup-container">
            <Image className="signup-valorant-logo" src={valorantlogo}></Image>
            <div className="signup-text">
              Sign up for a <span className="valorant-text">valorant</span>{" "}
              Account.
            </div>
            <input
              type="text"
              name="username"
              id="signup-input"
              value={formData.username}
              onChange={handleChange}
              className="signup-username"
              placeholder="USERNAME"
            ></input>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              id="signup-input"
              className="signup-email"
              placeholder="EMAIL"
            ></input>
            <input
              name="password"
              type="text"
              value={formData.password}
              onChange={handleChange}
              id="signup-input"
              className="signup-password"
              placeholder="PASSWORD"
            ></input>
            <button type="submit">
              SUBMIT
              {/* <MoveRight type="submit" className="move-right" href="/login" /> */}
            </button>
            <a className="middle" href="/login">
              <div className="already-have-account">
                Already have an account?
              </div>
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default signup;
