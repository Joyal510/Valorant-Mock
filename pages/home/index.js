import React from "react";
import { Suspense } from "react";

import HomeButtons from "@/app/components/HomeButtons";

function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="home-page">
          <div className="nonagon-home">
            <HomeButtons />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default Home;
