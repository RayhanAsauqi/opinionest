import React from "react";
import AppButton from "@/components/app/Button";
import Image from "next/image";
import Link from "next/link";

const itemNavbar = [
  {
    id: 1,
    title: "Features",
    to: "/features",
  },
  {
    id: 2,
    title: "Talks",
    to: "/talks",
  },
  {
    id: 3,
    title: "Speaks",
    to: "/speak/form",
  },
];

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-[104px] py-6">
        <div>
          <Image src="/opininest.svg" alt="opininest" width={114} height={44} />
        </div>
        <div className="flex gap-[30px]">
          {itemNavbar.map((item) => (
            <Link href={item.to} key={item.id}>
              <h1>{item.title}</h1>
            </Link>
          ))}
        </div>
        <AppButton
          title="Sign in"
          className="btn bg-[#00A9FF] px-8 py-3 rounded text-white text-base font-bold leading-normal flex "
          alt="sign in"
          width={20}
          height={20}
          isSpeakView={true}
        />
      </nav>
    </div>
  );
}

export default Navbar;
