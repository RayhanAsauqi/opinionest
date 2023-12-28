import React from "react";
import Image from "next/image";

const itemFooter = [
  {
    id: 1,
    title: "Login",
    item: [
      {
        id: 1,
        text: "Sign in",
      },
      {
        id: 2,
        text: "Register",
      },
    ],
  },
  {
    id: 2,
    title: "Speaks",
    item: [
      {
        id: 1,
        text: "Critique",
      },
      {
        id: 2,
        text: "Aspiration",
      },
      {
        id: 3,
        text: "Report",
      },
    ],
  },
  {
    id: 3,
    title: "Features",
    item: [
      {
        id: 1,
        text: "Anonymous",
      },
      {
        id: 2,
        text: "Easy to use",
      },
      {
        id: 3,
        text: "Privacy",
      },
      {
        id: 4,
        text: "Secure",
      },
      {
        id: 3,
        text: "Interactive",
      },
    ],
  },
];

function index() {
  return (
    <>
      <div className="px-[60px] pt-[60px]">
        <hr />
      </div>
      <div className="flex justify-between px-[103.91px] pt-[60px]">
        <div>
          <Image
            src="/opininest.svg"
            alt="opininest"
            width={155.182}
            height={60.273}
          />
        </div>
        <div className="flex gap-[60px]">
          {itemFooter.map((section) => (
            <div key={section.id}>
              <h1 className="text-right text-base font-medium leading-normal text-[#00A9FF]">
                {section.title}
              </h1>
              <ul className="pt-4">
                {section.item.map((item) => (
                  <li
                    key={item.id}
                    className="text-right pt-2 text-[#737373] text-base font-normal leading-normal"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-[60px] pb-[60px]">
        <h1 className="text-base font-normal leading-normal text-[#00A9FF]">
          Copyright © 2022 Archy. All Rights Reserved.
        </h1>
      </div>
    </>
  );
}

export default index;
