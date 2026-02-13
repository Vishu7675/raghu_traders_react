'use client'
import React from "react";
import Link from "next/link";
const Headers = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="flex justify-between px-6 py-4 bg-green-600 text-white items-center">
      <h1>RT</h1>
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About us</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div>
        {!token ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <div
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
            className="cursor-pointer"
          >
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default Headers;
