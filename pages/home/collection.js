import React from "react";
import Image from "next/image";
import "../../src/app/collection.css";
import CollNav from "@/app/components/CollNav";

function collection() {
  return (
    <div className='collection-wrapper'>
      <CollNav />
    </div>
  );
}

export default collection;
