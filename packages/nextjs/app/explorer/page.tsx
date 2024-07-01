"use client";

import React, { useState } from "react";
import Borrower from "~~/components/Borrower/Borrower";

function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="pt-[100px] flex items-center justify-center min-h-[500px]">
      {!showResults && (
        <div className="w-[900px] text-white p-16 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold">Stormbit Explorer</h1>
          <div className="flex flex-col">
            <div className="border border-solid border-[#6C757D] rounded-[7px] w-[760px] flex justify-between h-[47px] items-center mb-6">
              <input
                type="text"
                className="bg-transparent border-none focus:outline-none w-[680px] px-4"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button className="bg-[#D0C8FF] px-20 h-[47px] rounded-r-[8px] text-black" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center items-center px-14 py-4 bg-[#2F2F2F] border border-solid border-[#444C6A] rounded-[11px] gap-2">
              <span className="text-sm text-white text-center">Proofs Generated</span>
              <span className="text-[#AE9FFD] text-2xl">1025</span>
            </div>

            <div className="flex flex-col justify-center items-center px-14 py-4 bg-[#2F2F2F] border border-solid border-[#444C6A] rounded-[11px] gap-2">
              <span className="text-sm text-white text-center">Unique Users Verified</span>
              <span className="text-[#AE9FFD] text-2xl">103</span>
              <div className="flex text-xs text-white gap-4">
                <span>6 lenders</span>
                <span>97 borrowers</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center px-14 py-4 bg-[#2F2F2F] border border-solid border-[#444C6A] rounded-[11px] gap-2">
              <span className="text-sm text-white">Providers</span>
              <span className="text-[#AE9FFD] text-2xl">15</span>
            </div>
          </div>
        </div>
      )}

      {showResults && (
        <div className="w-full p-6 mt-4">
          <h1 className="text-white mb-11">Discover borrowers</h1>
          <div className="border border-solid border-[#374B6D] rounded-[7px] w-full flex justify-between h-[47px] items-center mb-6">
            <input
              type="text"
              className="bg-transparent border-none focus:outline-none w-[680px] px-4 text-white"
              value={searchQuery}
            />
          </div>
          <div className="flex flex-col items-center">
            <Borrower></Borrower>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
