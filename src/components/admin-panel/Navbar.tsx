import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="py-3 px-4 bg-white flex justify-between items-center">
      <h2 className="text-xl">Travel Marketings Admin Pannel</h2>

    </div>
  );
};

export default Navbar;
