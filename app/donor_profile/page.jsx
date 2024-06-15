"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function page() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <Navbar />

      <div className="mt-36 p-4">
        <center>
          <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Donor Profile
          </h1>
        </center>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <div className="flex flex-col max-w-md mx-auto p-4">
                <h3 class="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-lg lg:text-lg dark:text-white">
                  Update Profile
                </h3>

                <label
                  htmlFor="long-input"
                  className="mb-2 text-gray-700 text-lg font-semibold"
                >
                  Wallet Address
                </label>
                <input
                  type="text"
                  id="long-input"
                  className="p-2 h-10 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your text here..."
                />

                <label
                  htmlFor="long-input"
                  className="mb-2 text-gray-700 text-lg font-semibold"
                >
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  id="long-input"
                  className="p-2 h-10 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your text here..."
                />
              </div>

              <center>
                <button className="p-2 bg-blue-400 rounded  text-white">
                  Update Profile
                </button>
              </center>
            </Grid>
            <Grid item xs={12} lg={6}>
              <h3 class="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-lg lg:text-lg dark:text-white">
                Transaction History
              </h3>

              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Student Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Amount Donated
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Abongile Manda
                      </th>
                      <td class="px-6 py-4">23 May 2024</td>
                      <td class="px-6 py-4">$4.40</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Madara Ochimaru
                      </th>
                      <td class="px-6 py-4">13 June 2024 </td>
                      <td class="px-6 py-4">$3.00</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Tshepo Ncube
                      </th>
                      <td class="px-6 py-4">23 December 2023</td>
                      <td class="px-6 py-4">$1.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default page;
