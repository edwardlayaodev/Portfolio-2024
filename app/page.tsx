"use client"
import { useState } from "react";
import PortraitAnimOrganism from "./_components/organisms/PortraitAnimOrganism";

export default function Home() {
  return (
    <div className="bg-base-100 text-base-content">
      <div className="flex flex-col-reverse justify-center items-center md:flex-row text-center pt-24">
        <PortraitAnimOrganism />
      </div>
    </div>
  );
}
