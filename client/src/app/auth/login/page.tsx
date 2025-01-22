"use client";
import Image from "next/image";
import Pattern from "../../../../public/svgs/pattern";
import PatternLogin2 from "../../../../public/svgs/pattern-login-2";
import PatternLogin3 from "../../../../public/svgs/pattern-login-3";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: { target: { value: any } }) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: { target: { value: any } }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email, password);

    fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data == true) {
          window.location.href = "http://localhost:3000";
        } else {
          alert("Invalid login credential");
        }
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  };

  return (
    <div className="flex flex-col pb-[212px] relative">
      <div className="absolute top-0">
        <Pattern />
      </div>
      <div className="absolute bottom-0 -z-10">
        <PatternLogin2 />
      </div>
      <div className="flex justify-center pt-[60px] pb-[71.64px]">
        <Image
          src="/opininest.svg"
          alt="My Image"
          width={205.909} // Lebar gambar
          height={80.364}
        />
      </div>
      <div className="flex justify-center relative">
        <div className="absolute -top-[200px] right-[150px] -z-10">
          <PatternLogin3 />
        </div>
        <div className="border-[1px] px-[104px] py-[75px] rounded-md border-primary bg-gradient-to-br from-transparent to-white via-white shadow-card">
          <div className="pb-[60px]">
            <h1 className="text-black font-pop text-[20px] font-medium leading-normal text-center">
              Welcome to OpinioNest
            </h1>
            <p className="text-black font-pop text-base font-normal leading-normal text-center mt-[8px]">
              Please complete your login information
            </p>
          </div>
          <button className="flex items-center justify-center px-[120px] py-[18px] border-[1px] border-[#D5D5D5] bg-white shadow-but rounded-[6px] gap-[8px]">
            <Image
              src="/iconGoogle.svg"
              alt="My Image"
              width={24}
              height={24}
            />
            <h1>Google Account</h1>
          </button>
          <h1 className="text-black font-pop text-[16px] font-normal leading-normal py-[16px] text-center">
            or sign in with
          </h1>
          <div className="flex flex-col gap-[16px]">
            <input
              type="text"
              placeholder="Username or email"
              className="border-[1px] border-[#D5D5D5] w-full bg-transparent shadow-but rounded-[6px] py-[18px] px-[20px]"
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-[#D5D5D5] w-full bg-transparent shadow-but rounded-[6px] py-[18px] px-[20px]"
              onChange={handlePassword}
            />
          </div>
          <button
            className="bg-primary w-full rounded-[6px] text-white font-pop text-[16px] font-normal leading-normal mt-[16px] py-[18px]"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
