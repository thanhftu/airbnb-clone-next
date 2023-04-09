"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className="hiden md:block cursor-pointer"
      src="/images/logo.png"
      height={100}
      width={100}
      alt="Logo"
    />
  );
}

export default Logo;
