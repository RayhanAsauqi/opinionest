"use client";
import React from "react";
import AppButton from "@/components/app/Button";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const itemNavbar = [
  {
    id: 1,
    title: "Features",
    to: "/#features",
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

const notificationData = [
  {
    id: 1,
    title: "Target Anda memberikan respon terhadap speaks Anda",
    time: "5 minutes ago",
  },
  {
    id: 2,
    title: "Anda berhasil menyukai speaks yang Anda posting",
    time: "10 minutes ago",
  },
];

function Navbar() {
  const [user, setUser] = useState("----");
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathName = usePathname();
  const request = "halo";

  useEffect(() => {
    async function getSession() {
      const fetchUser = await axios.post("http://localhost:3001/session", {
        request,
      });

      if (fetchUser.data != false) {
        setUser(fetchUser.data);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }

    getSession();
  }, []);

  const handleSubmit = () => {
    window.location.href = "http://localhost:3000/auth/login";
  };

  const handleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleNotification = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    axios.post("http://localhost:3001/logout", {
      request,
    });

    window.location.href = "http://localhost:3000/auth/login";
  };

  return (
    <>
      <nav className="grid grid-cols-12 px-[104px] py-6">
        <div className="col-span-3">
          <Image src="/opininest.svg" alt="opininest" width={114} height={44} />
        </div>
        <div className="col-span-6 flex justify-center items-center gap-[30px]">
          {itemNavbar.map((item) => (
            <Link
              className={clsx(
                pathName.startsWith(item.to) ? "text-primary" : ""
              )}
              href={isLogin ? `${item.to}` : `/auth/login`}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-3 flex items-center justify-end gap-8">
          {isLogin ? (
            <>
              <button onClick={handleNotification}>
                <IoNotifications className="w-6 h-6 text-primary" />
              </button>
              <AppButton
                title={user}
                className="btn bg-[#00A9FF] px-8 py-3 rounded text-white text-base font-bold leading-normal flex "
                alt="sign in"
                width={20}
                height={20}
                isSpeakView={true}
                onClick={handleProfile}
              />
            </>
          ) : (
            <AppButton
              title="Sign in"
              className="btn bg-[#00A9FF] px-8 py-3 rounded text-white text-base font-bold leading-normal flex "
              alt="sign in"
              width={20}
              height={20}
              isSpeakView={true}
              onClick={handleSubmit}
            />
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-24 right-72 w-[400px] bg-white shadow-md px-5 z-10 border border-[#D5D5D5] rounded-xl divide-[#D5D5D5] divide-y">
          {notificationData.map((item, index) => {
            return (
              <Link
                href={`#${index + 1}`}
                key={index}
                className="flex flex-col py-5 gap-2"
              >
                <span className="">{item.title}</span>
                <span className="text-sm text-komen">{item.time}</span>
              </Link>
            );
          })}
        </div>
      )}
      {profileOpen && (
        <div className="absolute flex flex-col top-24 right-[104px] w-[200px] bg-white shadow-md px-5 z-10 border border-[#D5D5D5] rounded-md divide-[#D5D5D5] divide-y">
          <Link href={"/profile"} className="py-5">
            Go to profile
          </Link>
          <button className="text-start py-5" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
