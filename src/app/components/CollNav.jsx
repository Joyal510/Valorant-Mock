import React from "react";
import "../../../src/app/collection.css";
import Link from "next/link";
import Middle from "./Middle";
import { useState } from "react";

function CollNav() {
  const [middle, setMiddle] = useState(true);
  return (
    <div className="colnav-wrapper">
      <div className="navigation">
        <Link
          href="/home/collection"
          onClick={() => {
            setMiddle(!middle);
          }}
        >
          <div className="nav-button">Skins</div>
        </Link>
        <Link href="/">
          {" "}
          <div className="nav-button">Maps</div>
        </Link>
      </div>
      {middle && <Middle />}
    </div>
  );
}

export default CollNav;
