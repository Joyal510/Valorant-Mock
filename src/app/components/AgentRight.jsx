import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

function AgentRight(props) {
  const roleId = props.icons?.find((agent) => agent.uuid === props.selectId);
  const [iconheight, setIconHeight] = useState(0);
  useEffect(() => {
    const imagesHeight = document.querySelector(".agent-abilities");
    if (imagesHeight) {
      const height = imagesHeight.offsetHeight;
      setIconHeight(height);
    }
  }, [roleId]);
  return (
    <div className="agent-right">
      {roleId && (
        <>
          <Image
            className="agent-role-image"
            alt="image"
            src={roleId.role.displayIcon}
            width="65"
            height="65"
          />
          <label className="agent-role-title">{roleId.role.displayName}</label>
          <p className="agent-role-desc">{roleId.role.description}</p>
          <label className="agent-ability-title"> ABILITIES -</label>
          <div className="together">
            {" "}
            <div className="agent-abilities">
              {roleId &&
                roleId.abilities.map(
                  (ele) =>
                    ele.displayIcon && (
                      <div className="together"> 
                      <Image
                        alt={ele.displayName}
                        src={ele.displayIcon}
                        width="50"
                        height="50"
                        key={ele.uuid}
                      />
                      <div className="ability-title">{ele.displayName}</div>
                      </div>
                    )
                )}
                
                 
            </div>
            {/* <div className="agent-ability-description">
              {roleId &&
                roleId.abilities.map((ele) => (
                  <div className="ability-container" key={ele.displayName}>
                    <div className="ability-title">{ele.displayName}</div>
                    <div className="ability-description">{ele.description}</div>
                  </div>
                ))}
            </div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default AgentRight;
