import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ArrowLeft from "../../../../../public/icons/arrowLeft";

function page() {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px] ">
        <div className="grid grid-cols-3 px-[416px] items-center justify-center pb-[23px] ">
          <div className="flex">
            <Link
              href="/"
              className="flex flex-row items-center bg-[#E2F5FF]  rounded-[4px] p-[10px] text-primary text-sm font-pop font-normal leading-normal gap-[8px]"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to home
            </Link>
          </div>
          <h1 className="text-center text-black font-pop text-xl font-medium">
            Successful delivered
          </h1>
        </div>
      </div>
      <div className="border-[1px] border-primary rounded-[20px] px-[186px] py-[134px] mx-[416px] ">
        <div className="grid justify-center gap-y-[60px] ">
          <h1 className="text-center text-primary font-pop text-[24px] font-medium leading-normal">
            Yuhuuu, You said it!
          </h1>
          <div className="flex justify-center">
            <Image
              src="/successSend.svg"
              alt="tes"
              width={178.238}
              height={160}
            />
          </div>
          <p className="text-black font-pop text-[16px] font-normal leading-normal">
            Explore{" "}
            <Link href={"/talks"} className="text-primary">
              Talks
            </Link>{" "}
            for more speaks
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
