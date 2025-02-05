import React from "react";
import Link from "next/link";
function Headers() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-white">RT</h1>
        <div className="flex gap-4">
          <Link href={"/"} className="text-white">
            Home
          </Link>
          <Link href={"/about"} className="text-white">
            About us
          </Link>
          <Link href={"/products"} className="text-white">
            Products
          </Link>
          <Link href={"/contact"} className="text-white">
            Contact
          </Link>
        </div>
        <div>
          <Link href={"/login"} className="text-white">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Headers;
