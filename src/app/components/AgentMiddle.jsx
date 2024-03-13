import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function AgentMiddle(props) {
  const router = useRouter();
  const { uuid } = router.query;

  const onAgentClick = (e, uuid) => {
    e.preventDefault();
    // router.push(`/agents/${uuid}`);

    // console.log(uuid);
  };

  // console.log(icons);
  return (
    <div className="agent-middle">
      {props.icons.map((element) => (
       
          <Image
            onClick={(e) => {
              onAgentClick(e, element.uuid);
              props.onHandleId(element.uuid);
            }}
            key={element.uuid}
            src={element.displayIcon}
            alt={element.displayName}
            width="65" // Adjust width
            height="65" // Adjust height
          />

      ))}
    </div>
  );
}

export default AgentMiddle;
