import React from "react";
import AppButton from "@/components/app/Button";
import Link from "next/link";
import FormSpeak from "@/components/form/speak";

function room() {
  return (
    <section className="px-[104px] pt-[60px]">
      <div className="flex items-center gap-[267px] pb-[23px]">
        <Link href="/">
          <AppButton
            title="Back To Home"
            className="text-[#144B66] flex items-center gap-1 border p-[10px] rounded bg-[#E2F5FF]"
            prefixIcon="/icons/arrowLeft.svg"
            width={20}
            height={20}
            isSpeakView={true}
          />
        </Link>
        <h1 className="text-2xl font-medium leading-[170%]">
          Go ahead and say what you want to say
        </h1>
      </div>

      <FormSpeak />
      {/* <DropDown /> */}
    </section>
  );
}

export default room;
