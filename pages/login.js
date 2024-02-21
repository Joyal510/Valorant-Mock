import React from "react";
import Image from "next/image";
import "../src/app/login.css";
import kayoWallpaper from "../public/images/kayoWallpaper.jpg";
import valorantlogo from "../public/images/valorantlogo.png";

function login() {
  return (
    <>
      <div className="login">
        <div className="kayo-wallpaper">
          <Image className="kayoImage" src={kayoWallpaper} />
        </div>
        <form className="container" action="./login" method="post">
          <div className="white-background">
            <Image className="login-valorant-logo" src={valorantlogo} />
            <div className="login-text">
              Login in with your
              <br />
              <div className="riot-account">Riot Account</div>
            </div>
            <input
            name="username"
              id="inputElement"
              className="login-username"
              placeholder="USERNAME"
            />
            <input
            name="password"
              id="inputElement"
              className="login-password"
              placeholder="PASSWORD"
            />
            <button className="go-forward">
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
            </button>
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
