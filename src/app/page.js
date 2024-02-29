import "./globals.css";
import { connectDB } from "../../mongodb";
import database from "../../models/Schema";

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
          <button className="startButton">
            {" "}
            <a href="/login">START </a>
          </button>
        </div>
      </div>
    </>
  );
}
