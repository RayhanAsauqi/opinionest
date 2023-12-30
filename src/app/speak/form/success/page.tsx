import AppButton from "@/components/app/Button/index";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <>
      <section className="container pt-[60px] ">
        <div className="grid grid-cols-3 px-[416px] items-center justify-center pb-[23px] ">
          <AppButton
            title="Back to home"
            className="btn rounded-[4px] bg-[#E2F5FF] border p-[10px] flex items-center gap-1 col-span-1"
            prefixIcon="/arrowLeftBlue.svg"
            width={20}
            height={20}
            textStyles="text-[#00A9FF]"
            isSpeakView={true}
          />
          <div className="col-span-2">
            <h1 className="text-center text-2xl font-medium leading-[170%]  -me-14">
              Succesful delivery
            </h1>
          </div>
        </div>
      </section>
      <div className="border rounded-[20px] px-[186px] py-[134px] mx-[416px] ">
        <div className="grid justify-center gap-y-[60px] ">
          <h1 className="text-center text-[#00A9FF] text-2xl font-medium leading-normal">
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
          <p className="text-center">
            Explore <span>Talks</span> for more speaks
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
