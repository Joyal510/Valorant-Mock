import React from "react";
import Image from "next/image";
import { useEffect } from "react";

function AgentLeft(props) {
  useEffect(() => {
    console.log(props.selectId);
  }, [props.selectId]);
  useEffect(() => {
    console.log(props.icons);
  });
  const agent = props.icons?.find((agent) => agent.uuid === props.selectId);
  return (
    <div className="agent-left">
      {agent && (
        <>
          <Image
            className="agent-fullPortrait"
            alt="image"
            src={agent.fullPortrait}
            width="465"
            height="465"
          />
          <label className="agent-name">{agent.displayName}</label>
        
          <p className="agent-desc">{agent.description}</p>
        </>
      )}
    </div>
  );
}

export default AgentLeft;
