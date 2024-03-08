import "./globals.css";
import { connectDB } from "../../mongodb";
import database from "../../models/Schema";
import Link from "next/link";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());

// connectDB();

export default function Home() {
  return (
    <>
      <div className="percentContainer">
        <div className="eightyPercent">
          {/* <Image className="chamber" src={chamber} /> */}
        </div>
        <div className="twentyPercent">
          <Link id='startbutton-container' href="/login">
            <button className="startButton">
              {" "}
              {/* <a href="/login">START </a> */}
              START
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
