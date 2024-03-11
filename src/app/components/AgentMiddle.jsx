import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import valorantAgents from "./../../../valorantAgents.json";

function AgentMiddle() {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    // Fetch the JSON data
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((data) => setIcons(Object.values(data)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(icons);
  return (
    <div className="agent-middle">
      {icons.map((element) => (
        <Image
          key={element.uuid}
          src={element.displayName}
          alt={element.displayName}
          width={150} // Adjust width as needed
          height={150} // Adjust height as needed
        />
      ))}
    </div>
  );
}

export default AgentMiddle;
