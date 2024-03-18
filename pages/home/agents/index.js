import React from "react";
import "../../../src/app/agents.css";
import AgentMiddle from "@/app/components/AgentMiddle";
import AgentLeft from "@/app/components/AgentLeft";
import AgentRight from "@/app/components/AgentRight";
import { useState, useEffect } from "react";
import Link from "next/link";

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
        <AgentLeft icons={icons} selectId={selectId} />
        <AgentMiddle icons={icons} onHandleId={onHandleId} />
        <AgentRight icons={icons} selectId={selectId} />
      </div>
      <div>
        <Link href="/home">
          <div className="back-to-home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}
export default agents;
