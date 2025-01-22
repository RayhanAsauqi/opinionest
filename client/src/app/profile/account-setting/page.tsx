"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { useState, useRef } from "react";

const AccountSetting = () => {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 gap-4 px-[104px] mt-[40px]">
        <div className="col-span-4">
          <div
            className="relative inset-0 rounded-xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={"/images/profile-pict.png"}
              width={400}
              height={339}
              sizes="100%"
              alt="profile"
              className="w-full h-[339px] object-cover"
            />
            {isHovered && (
              <button
                onClick={handleEditClick}
                className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 text-white flex items-center justify-center"
              >
                <FaRegEdit className="w-5 h-5" />
              </button>
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  if (file) {
                    console.log("File selected:", file);
                  }
                }
              }}
            />
          </div>
        </div>
        <div className="col-span-8 flex flex-col ">
          <div className="border border-[#D5D5D5] shadow-sm rounded-xl flex flex-col p-8 gap-4">
            <div className="flex flex-col gap-2">
              <label>Username</label>
              <input
                type="text"
                defaultValue={"rezrfm"}
                className="border border-[#D5D5D5] shadow-sm rounded-md px-6 py-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                defaultValue={"Reza Arif Maulana"}
                className="border bg-[#D5D5D5] border-[#D5D5D5] shadow-sm rounded-md px-6 py-3 outline-none"
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="text"
                defaultValue={"reza.maulana@paramadina.students.ac.id"}
                className="border bg-[#D5D5D5] border-[#D5D5D5] shadow-sm rounded-md px-6 py-3 outline-none"
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-[#D5D5D5] shadow-sm rounded-md px-6 py-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Confimation Password</label>
              <input
                type="password"
                placeholder="Enter your confirmation password"
                className="border border-[#D5D5D5] shadow-sm rounded-md px-6 py-3 outline-none"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button className="bg-primary px-8 py-3 text-white font-bold rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountSetting;
