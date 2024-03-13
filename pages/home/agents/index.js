import React from "react";
import "../../../src/app/agents.css";
import AgentMiddle from "@/app/components/AgentMiddle";
import AgentLeft from "@/app/components/AgentLeft";
import AgentRight from "@/app/components/AgentRight";
import { useState, useEffect } from "react";

function agents() {
  const [icons, setIcons] = useState([]);
  const [selectId, selectedId] = useState(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((data) => setIcons(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  

  const onHandleId = (details) => {
    selectedId(details);
  };
  
  return (
    <>
      <div className="agents-title">AGENTS</div>
      <div className="agents-components">
        {" "}
        <AgentLeft icons={icons} selectId={selectId}/>
        <AgentMiddle icons={icons} onHandleId={onHandleId} />
        <AgentRight icons={icons} selectId={selectId}/>
      </div>
    </>
  );
}
export default agents;
