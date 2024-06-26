"use client";
import LeaderboardComponent from "@/components/LeaderboardComponent";
import React from "react";

function page() {
  return (
    <main className=" items-center justify-between p-12">
      <div className="mt-8">
        <LeaderboardComponent currentPoints={120} />
      </div>
    </main>
  );
}

export default page;
