import React from "react";
import "../../src/app/home.css";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className="button-container">
        <Link href='/home'>
          {" "}
          <button className="home-button">
            <div className="diamond"></div>PLAY
          </button>
        </Link>
        <Link href='/home'>
        <button className="home-button">
          <div className="diamond"></div>CAREER
        </button>
        </Link>
        <Link href='/home/collection'>
        <button className="home-button">
          <div className="diamond"></div>COLLECTION
        </button>
        </Link>
        <Link href='/home/agents'>
        <button className="home-button">
          <div className="diamond"></div>AGENTS
        </button>
        </Link>
        <Link href='/home'>
        <button className="home-button">
          <div className="diamond"></div>STORE
        </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
