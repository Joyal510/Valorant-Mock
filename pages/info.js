import React from "react";
import Image from "next/image";
import "../src/app/info.css";
import valorantlogo from "../public/images/valorantlogo.png";
import omen from '../public/images/omen.png'
import valorant from '../public/images/valorant.jpg'

function info() {
  return (
    <>
      <div className="containsAllhexagonProperties">
        <div className="text">
          PLAY <br></br>VALORANT <br></br> FOR FREE !
        </div>
        <div className="logo">
          <Image src={valorantlogo} />
        </div>
        <div className="omen">
          <Image src={omen} />
        </div>
        <div>
          <Image className="valorantBackground" src={valorant} />
        </div>
        <div className="purple"></div>

        <div className="black"></div>
      </div>
{/* ============================================================================ */}

      <div className="content-holder">
        <p>
          <a className="start" href="https://playvalorant.com/en-us/?gad_source=1&gclid=Cj0KCQiA2KitBhCIARIsAPPMEhIIJOc34F1IFpuadYlda6LBt6fRtGlrBDqmYhfoCWKSeqD-lJIF-dkaAkWhEALw_wcB&gclsrc=aw.ds" target="_blank">
            Valorant
          </a>{" "}
          is a team-based first-person tactical hero shooter set in the near
          future. Players play as one of a set of Agents, characters based on
          several countries and cultures around the world. In the main game
          mode, players are assigned to either the attacking or defending team
          with each team having five players on it.
          <br></br>
          <br></br>Agents have unique abilities, each requiring charges, as well
          as a unique ultimate ability that requires charging through kills,
          deaths, orbs, or objectives. Every player starts each round with a
          "classic" pistol and one or more "signature ability" charges. Other
          weapons and ability charges can be purchased using an in-game economic
          system that awards money based on the outcome of the previous round,
          any kills the player is responsible for, and any objectives completed.
          <br></br>
          <br></br> The game has an assortment of weapons including secondary
          guns like sidearms and primary guns like submachine guns, shotguns,
          machine guns, assault rifles and sniper rifles. There are automatic
          and semi-automatic weapons that each have a unique shooting pattern
          that has to be controlled by the player to be able to shoot
          accurately. It currently offers 23 agents to choose from.The player
          will get 5 unlocked agents when they create their account, and will
          have to unlock the rest of the agents by collecting an in-game
          currency called Kingdom Credits. Kingdom Credits can be acquired by
          playing games or completing daily and weekly tasks, and can be spent
          on unlock new agents or cosmetic items.
        </p>
      </div>
    </>
  );
}

export default info;
