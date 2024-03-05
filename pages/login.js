import React from "react";
import Image from "next/image";
import "../src/app/login.css";
import kayoWallpaper from "../public/images/kayoWallpaper.jpg";
import valorantlogo from "../public/images/valorantlogo.png";
import { useState } from "react";

function login() {
  const [LoginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(LoginData);
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LoginData),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        window.location.href = "/home/home";
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <>
      <div className="login">
        <div className="kayo-wallpaper">
          <Image className="kayoImage" src={kayoWallpaper} />
        </div>
        <form className="container" onSubmit={handleLogin} method="post">
          <div className="white-background">
            <Image className="login-valorant-logo" src={valorantlogo} />
            <div className="login-text">
              Login in with your
              <br />
              <div className="riot-account">Riot Account</div>
            </div>
            <input
              name="username"
              onChange={handleLoginChange}
              value={LoginData.username}
              id="inputElement"
              className="login-username"
              placeholder="USERNAME"
            />
            <input
              name="password"
              onChange={handleLoginChange}
              value={LoginData.password}
              id="inputElement"
              className="login-password"
              placeholder="PASSWORD"
            />
            {/* <button className="go-forward">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button> */}
            <button type="submit">Login</button>
          </div>
          <div>
            <div id="hoverBlack" className="cant-sign-in">
              <a
                href="https://support-valorant.riotgames.com/hc/en-us/articles/360046229573-Recover-Your-Account"
                target="_blank"
                id="hoverBlack"
              >
                CAN'T SIGN IN?
              </a>
            </div>

            <a href="/signup" id="hoverBlack" className="createAccount">
              CREATE ACCOUNT
            </a>

            <br />
          </div>
        </form>
      </div>
    </>
  );
}

export default login;
