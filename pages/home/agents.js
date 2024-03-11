import React from "react";
import "../../src/app/agents.css";
import AgentMiddle from "@/app/components/AgentMiddle";
import AgentLeft from "@/app/components/AgentLeft";
import AgentRight from "@/app/components/AgentRight";

function agents() {
  return (
    <>
      <div className="agents-title">AGENTS</div>
      <div className="agents-components">
        {" "}
        
        <AgentLeft />
        <AgentMiddle />
        <AgentRight />
      </div>
    </>
  );
}
export default agents;
