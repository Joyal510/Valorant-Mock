import React from "react";
import Image from "next/image";
import "../src/app/signup.css";
import valoJett from "../public/images/valoJett.jpg";
import valorantlogo from "../public/images/valorantlogo.png";
import Link from "next/link";
import { useState } from "react";

// connectDB();

function signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, res) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        console.log("Form data successfully sent to server");
        // console.log(formData);
        window.location.href = "/login";
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
          <Image alt="logo" className="valojett-image" src={valoJett} />
        </div>
        <form onSubmit={handleSubmit} id="myForm" method="post">
          <div className="signup-container">
            <Image
              alt="logo"
              className="signup-valorant-logo"
              src={valorantlogo}
            ></Image>
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
              autocomplete="off"
            ></input>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              id="signup-input"
              className="signup-email"
              placeholder="EMAIL"
              autocomplete="off"
            ></input>
            <input
              name="password"
              type="text"
              value={formData.password}
              onChange={handleChange}
              id="signup-input"
              className="signup-password"
              placeholder="PASSWORD"
              autocomplete="off"
            ></input>
            <button type="submit" className='move-right'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <Link className="middle" href="/login">
              <div className="already-have-account">
                Already have an account?
              </div>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default signup;
