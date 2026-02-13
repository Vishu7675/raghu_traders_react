'use client'
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {logo} from '../../public/images/logo.png'
const Headers = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <>
      {token && (
        <div className="flex justify-between px-6 py-4 bg-green-600 text-white items-center">
         <Image src={logo} width={100} height={50} alt="Logo" />
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
      )}
    </>
  );
};

export default Headers;
