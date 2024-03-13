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
  
  return (
    <div className="agent-left">
      {props.icons.uuid === props.selectId && (
        <Image src={props.icons.data.displayIcon} width="65" height="65" />
      )}
    </div>
  );
}

export default AgentLeft;
