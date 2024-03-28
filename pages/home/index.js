import React from "react";
import { Suspense } from "react";
import Link from "next/link";

import HomeButtons from "@/app/components/HomeButtons";

function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="home-page">
          <div className="nonagon-home">
            <HomeButtons />
          </div>

          <div title="Info" className="information">
            {" "}
            <Link href="/info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-open"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </Link>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default Home;
