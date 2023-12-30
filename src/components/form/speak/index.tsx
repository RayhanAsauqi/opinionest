import React from "react";
import DropDown from "@/components/app/Dropdown";

import DropZone from "@/components/app/DropZone/index";
import AppButton from "@/components/app/Button";
import Link from "next/link";

function FormSpeak() {
  const TypeTes = [
    { name: "Type Tes 1" },
    { name: "Type Tes 2" },
    { name: "Type Tes 3" },
    { name: "Type Tes 4" },
    { name: "Type Tes 5" },
    { name: "Type Tes 6" },
  ];
  return (
    <>
      <section className="pb-[60px]">
        <div className="border p-5 rounded-[20px]">
          <div className="grid grid-cols-3 items-center gap-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  w-full h-full border rounded text-[#737373] focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none "
            />
            <DropDown item={TypeTes} />
            <DropDown item={TypeTes} />
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 pt-4">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="border rounded-lg  grid w-full  text-[#737373] sm:text-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none  pt-5 pl-5"
                  placeholder="say it here"
                  rows={14}
                />
              </div>

              <div className="grid pt-4">
                <label htmlFor="foto">Foto</label>
                <DropZone
                  id="vidio"
                  src="/icons/speakForm/image.svg"
                  alt="dashed vector sign in"
                  width={24}
                  height={24}
                  iconPosition="py-[33px]"
                />
                <label htmlFor="vidio">Video</label>
                <DropZone
                  id="vidio"
                  src="/icons/speakForm/vidio.svg"
                  alt="dashed vector sign in"
                  width={24}
                  height={24}
                  iconPosition="py-[33px]"
                />
                <label htmlFor="tags">Tags</label>
                <input
                  id="tags"
                  type="text"
                  className="input input-bordered w-full h-[90px] rounded text-[#737373]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 pt-4 pb-5">
            <div className="w-[220px] flex justify-center items-center gap-1 px-[23px] py-[18px] border rounded bg-[#E2F5FF]">
              <input
                type="checkbox"
                className="checkbox rounded-none border "
              />
              <h1 className="text-[#144B66] text-base font-normal leading-normal">
                Set to anonymous
              </h1>
            </div>
            <div className="col-span-4">
              <Link href="/speak/form/success">
                <button className="btn w-full py-[18px] btn-lg bg-[#00A9FF] text-white">
                  <span className="text-base font-normal">Send</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormSpeak;
